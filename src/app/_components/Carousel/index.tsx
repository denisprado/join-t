'use client'

import { EmblaCarouselType, EmblaOptionsType } from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react'
import Image from 'next/image'
import { useCallback, useEffect, useState } from 'react'
import Video from '../Video'
import { DotButton, NextButton, PrevButton } from './ArrowsDotsButtons'
import imageByIndex from './imagesByIndex'

const EmblaCarousel = ({ images, videos }: { images: string[] | null, videos: string[] | null }) => {
	const [emblaRef, emblaApi] = useEmblaCarousel({});
	const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
	const [nextBtnDisabled, setNextBtnDisabled] = useState(true);
	const [selectedIndex, setSelectedIndex] = useState(0);
	const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

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

	const handlePrev = () => {
		//setCurrentVideoIndex(null); // Define como nulo para evitar pausar o vídeo novamente
		scrollPrev();
	};

	const handleNext = () => {
		//setCurrentVideoIndex(null); / / Define como nulo para evitar pausar o vídeo novamente
		scrollNext();
	};

	useEffect(() => {
		if (!emblaApi) return;

		onInit(emblaApi);
		onSelect(emblaApi);
		emblaApi.on('reInit', onInit);
		emblaApi.on('reInit', onSelect);
		emblaApi.on('select', onSelect);
	}, [emblaApi, onInit, onSelect]);



	return (
		<div className="embla">
			<div className="embla__viewport" ref={emblaRef}>
				<div className="embla__container">
					{images?.map((slide, index) => {
						const imageSrc = imageByIndex(images, index);
						return (
							<div key={index} className="embla__slide">
								<Image src={"/" + imageSrc} alt={slide + index} width={1025} height={1025} />
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
					<PrevButton
						onClick={() => {
							handlePrev();
						}}
						disabled={prevBtnDisabled} />
					<NextButton
						onClick={() => {
							handleNext();
						}} disabled={nextBtnDisabled} />
				</div>
				<div className="embla__dots">
					{scrollSnaps.map((_, index) => (
						<DotButton
							key={index}
							onClick={() => {
								scrollTo(index);
							}}
							className={'embla__dot'.concat(index === selectedIndex ? ' embla__dot--selected' : '')}
						/>
					))}
				</div>
			</div>
		</div>
	);
};

export default EmblaCarousel;