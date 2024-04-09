import { EmblaCarouselType } from 'embla-carousel';
import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';
import { useCallback, useEffect, useState } from 'react';
import Video from '../Video';
import { DotButton, NextButton, PrevButton } from './ArrowsDotsButtons';
import imageByIndex from './imagesByIndex';
import ExifReader from 'exif-js';

const EmblaCarousel = ({ images, videos }: { images: string[] | null, videos: string[] | null }) => {
	const [emblaRef, emblaApi] = useEmblaCarousel({});
	const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
	const [nextBtnDisabled, setNextBtnDisabled] = useState(true);
	const [selectedIndex, setSelectedIndex] = useState(0);
	const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
	// const [imageDescriptions, setImageDescriptions] = useState<string[]>([]);

	const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
	const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);
	const scrollTo = useCallback((index: number) => emblaApi && emblaApi.scrollTo(index), [emblaApi]);

	const onInit = useCallback((emblaApi: EmblaCarouselType) => {
		setScrollSnaps(emblaApi.scrollSnapList());
	}, []);

	const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
		setSelectedIndex(emblaApi.selectedScrollSnap());
		setPrevBtnDisabled(!emblaApi.canScrollPrev());
		setNextBtnDisabled(!emblaApi.canScrollNext());
	}, []);

	// const fetchImageDescriptions = async () => {
	// 	if (!images) return;

	// 	const descriptions = await Promise.all(images.map(async (imageSrc) => {
	// 		try {
	// 			console.log(imageSrc)
	// 			const exifData = await ExifReader.getAllTags(imageSrc);
	// 			console.log(exifData)
	// 			return exifData?.ImageDescription || '';
	// 		} catch (error) {
	// 			console.error('Erro ao extrair dados EXIF:', error);
	// 			return '';
	// 		}
	// 	}));

	// 	setImageDescriptions(descriptions);
	// };

	useEffect(() => {
		if (!emblaApi) return;

		onInit(emblaApi);
		onSelect(emblaApi);
		emblaApi.on('reInit', onInit);
		emblaApi.on('reInit', onSelect);
		emblaApi.on('select', onSelect);

		// fetchImageDescriptions();
	}, [emblaApi, onInit, onSelect, images]);

	return (
		<div className="embla">
			<div className="embla__viewport" ref={emblaRef}>
				<div className="embla__container">
					{images?.map((slide, index) => {
						const imageSrc = imageByIndex(images, index);
						return (
							<div key={index} className="embla__slide">
								{/* <div className="image-description bg-primary p-4">{imageDescriptions[index]}</div> */}
								<Image src={imageSrc} alt={slide + index} width={941} height={628} style={{ maxHeight: 628, objectFit: 'cover' }} />
							</div>
						);
					})}
					{videos?.map((video, i) => {
						const videoSrc = imageByIndex(videos, i);
						return (
							<div key={i} className="embla__slide">
								{images && <Video fileName={"/" + videoSrc} id={i + images?.length} currentVideoIndex={selectedIndex} />}
							</div>
						);
					})}
				</div>
				<div className="embla__buttons">
					<PrevButton onClick={scrollPrev} disabled={prevBtnDisabled} />
					<NextButton onClick={scrollNext} disabled={nextBtnDisabled} />
				</div>
				<div className="embla__dots">
					{scrollSnaps.map((_, index) => (
						<DotButton
							key={index}
							onClick={() => scrollTo(index)}
							className={'embla__dot'.concat(index === selectedIndex ? ' embla__dot--selected' : '')}
						/>
					))}
				</div>
			</div>
		</div>
	);
};

export default EmblaCarousel;
