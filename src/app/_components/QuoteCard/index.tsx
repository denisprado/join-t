import { Quote } from "@/types/index"
import Image from 'next/image'
import { Fragment } from 'react'
import ReactMarkdown from 'react-markdown'

const QuoteCard = ({ quote, i, revert }: { quote: Quote, i: number, revert: boolean }) => {
	const direction = revert ? 'lg:flex-row-reverse' : 'lg:flex-row'
	const photo = quote.avatar
	return (
		<div className={`flex-col-reverse ${direction} bg-secondary shadow-xl gap-8 rounded-xl p-8 flex `} id={`${quote.id}`} >
			<div className="w-full">
				<div className="flex flex-col gap-4" key={i}>
					<h2 className="card-title text-primary font-mono text-2xl lg:text-3xl">{quote.excerpt}</h2>
					<p className={'text-secondary-content'}>{quote.full}</p>
				</div>
			</div>
			<div className='flex flex-col gap-3 items-center min-w-64 justify-center bg-[url(/quote.png)] bg-center bg-no-repeat'>
				<figure className='p-5'><Image className='rounded-full' src={photo} alt={`Foto de ${quote.author}`} width={112} height={112} /></figure>
				<p className='font-serif text-primary'>{quote.author}</p>
			</div>
		</div>
	)
}

export default QuoteCard