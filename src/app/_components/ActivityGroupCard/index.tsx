import Image from 'next/image'
import { Activity } from "@/types/index"
import { Fragment } from 'react'
import useAllRecords from '@/app/_api/client/useAllRecords';

const ActivityGroupCard = ({ group, i }: { group: Activity[], i: number }) => {

	const { data: activityGroups, loading: loadingActGoups, error: errorActGoups } = useAllRecords<'activity_groups'>({
		table: 'activity_groups'
	});

	const id = activityGroups ? activityGroups!.filter(groupAct => groupAct.id === group[0]?.activity_group_id)[0]?.id.toString() : ''

	const image = activityGroups ? activityGroups!.filter(groupAct => groupAct.id === group[0]?.activity_group_id)[0]!.image!.toString() : ''

	return (
		<div className="card flex flex-col-reverse md:card-side bg-secondary shadow-xl" id={id} >
			<div className="card-body w-full lg:w-1/2 flex flex-col gap-4">
				{group.map((g, i) => {
					return (
						<Fragment key={i}>
							<h2 className="card-title text-primary font-serif text-4xl font-medium">{g.name}</h2>
							<p dangerouslySetInnerHTML={{ __html: g!.description! }}></p>
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