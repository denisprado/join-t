import Image from 'next/image'
import seed from '@/app/(seed)/seed'
import { Activity } from "@/types/index"
import { Fragment } from 'react'

const ActivityGroupCard = ({ group, i }: { group: Activity[], i: number }) => {
	const id = seed.activityGroups.filter(groupAct => groupAct.id === group[0]?.activityGroup)[0]?.id.toString()
	const image = seed.activityGroups.filter(groupAct => groupAct.id === group[0]?.activityGroup)[0]?.image.toString()
	return (
		<div className="card flex flex-col-reverse md:card-side bg-secondary shadow-xl" id={id} >
			<div className="card-body w-full lg:w-1/2 flex flex-col gap-4">
				{group.map((g, i) => {
					return (
						<Fragment key={i}>
							<h2 className="card-title text-primary font-serif text-4xl font-medium">{g.name}</h2>
							<p>{g.description}</p>
						</Fragment>
					)
				})}
				<div className="card-actions justify-start mt-8">
					<a className="btn btn-primary btn-outline btn-sm" href={"/" + id}>Planos e Detalhes</a>
					<a className="btn btn-accent text-white btn-sm" href="/agendar-avaliacao">Agendar Avaliação</a>
				</div>

			</div>
			<figure className='p-5'><Image src={"/" + image} alt="treino" width={800} height={1000} /></figure>
		</div>
	)
}

export default ActivityGroupCard