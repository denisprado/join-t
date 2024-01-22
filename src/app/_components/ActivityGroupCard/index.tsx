import Image from 'next/image'
import seed from '@/app/(seed)/seed'
import { Activity } from '@/app/page'
import { Fragment } from 'react'

const ActivityGroupCard = ({ group, i }: { group: Activity[], i: number }) => {

	return (
		<div className="card lg:card-side bg-secondary shadow-xl" id={`${seed.groups[i].title}`} >
			<div className="card-body w-1/2">
				{group.map((g, i) => {
					return (
						<Fragment key={i}>
							<h2 className="card-title text-primary font-serif text-4xl">{g.name}</h2>
							<p>{g.description}</p>
						</Fragment>
					)
				})}
				<div className="card-actions justify-start mt-8">
					<a className="btn btn-primary" href={"/" + seed.groups[i].id}>Planos e Detalhes</a>
					<a className="btn btn-accent text-white" href="/agendar-avaliacao">Agendar Avaliação</a>
				</div>

			</div>
			<figure className='p-5'><Image src={"/" + seed.groups[i].image} alt="treino" width={800} height={1000} /></figure>
		</div>
	)
}

export default ActivityGroupCard