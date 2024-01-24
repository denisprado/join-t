import React, { useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Image from 'next/image'

export const EmblaCarousel = ({ slides }: { slides: string[] }) => {
	const [emblaRef, emblaApi] = useEmblaCarousel()

	const scrollPrev = useCallback(() => {
		if (emblaApi) emblaApi.scrollPrev()
	}, [emblaApi])

	const scrollNext = useCallback(() => {
		if (emblaApi) emblaApi.scrollNext()
	}, [emblaApi])
	return (
		<div className="overflow-hidden relative" ref={emblaRef}>
			<div className="flex">
				{slides.map((slide, i) => {
					return <div key={i} className="flex-grow-0 flex-shrink-0 basis-full min-w-0 relative"><Image src={"/" + slide} alt={slide + i} width={1024} height={1024} /></div>
				})}
			</div>
			<div className='flex justify-between'>

				<button className="embla__prev" onClick={scrollPrev}>
					<p>Anterior</p>
				</button>
				<button className="embla__next" onClick={scrollNext}>
					<p>Próxima</p>
				</button>
			</div>
		</div>
	)
}
