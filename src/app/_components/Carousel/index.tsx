import React, { useState, useEffect, useCallback } from 'react'
import { EmblaCarouselType, EmblaOptionsType } from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react'
import Image from 'next/image'
import imageByIndex from './imagesByIndex'

type PropType = {
	slides: number[]
	options?: EmblaOptionsType
}
import { DotButton, NextButton, PrevButton } from './ArrowsDotsButtons'

export const EmblaCarousel = ({ slides }: { slides: string[] }) => {

	const [emblaRef, emblaApi] = useEmblaCarousel({})
	const [prevBtnDisabled, setPrevBtnDisabled] = useState(true)
	const [nextBtnDisabled, setNextBtnDisabled] = useState(true)
	const [selectedIndex, setSelectedIndex] = useState(0)
	const [scrollSnaps, setScrollSnaps] = useState<number[]>([])

	const scrollPrev = useCallback(
		() => emblaApi && emblaApi.scrollPrev(),
		[emblaApi]
	)
	const scrollNext = useCallback(
		() => emblaApi && emblaApi.scrollNext(),
		[emblaApi]
	)
	const scrollTo = useCallback(
		(index: number) => emblaApi && emblaApi.scrollTo(index),
		[emblaApi]
	)

	const onInit = useCallback((emblaApi: EmblaCarouselType) => {
		setScrollSnaps(emblaApi.scrollSnapList())
	}, [])

	const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
		setSelectedIndex(emblaApi.selectedScrollSnap())
		setPrevBtnDisabled(!emblaApi.canScrollPrev())
		setNextBtnDisabled(!emblaApi.canScrollNext())
	}, [])

	useEffect(() => {
		if (!emblaApi) return

		onInit(emblaApi)
		onSelect(emblaApi)
		emblaApi.on('reInit', onInit)
		emblaApi.on('reInit', onSelect)
		emblaApi.on('select', onSelect)
	}, [emblaApi, onInit, onSelect])

	return (
		<div className="embla" >
			<div className="embla__viewport" ref={emblaRef}>
				<div className="embla__container">
					{slides.map((slide, i) => {
						const imageSrc = imageByIndex(slides, i)
						return <div key={i} className="embla__slide">
							<Image src={"/" + imageSrc} alt={slide + i} width={1025} height={1025} /></div>
					})}
				</div>
				<div className="embla__buttons">
					<PrevButton onClick={scrollPrev} disabled={prevBtnDisabled} />
					<NextButton onClick={scrollNext} disabled={nextBtnDisabled} />
				</div>
			</div>
			<div className="embla__dots">
				{scrollSnaps.map((_, index) => (
					<DotButton
						key={index}
						onClick={() => scrollTo(index)}
						className={'embla__dot'.concat(
							index === selectedIndex ? ' embla__dot--selected' : ''
						)}
					/>
				))}
			</div>
		</div >
	)
}
