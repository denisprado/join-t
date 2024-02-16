import Image from 'next/image'
import { Activity } from "@/types/index"
import { Fragment } from 'react'
import useAllRecords from '@/app/_api/client/useAllRecords';
import useRecordById from '@/app/_api/client/useRecordById';
import { getArrayOfImages } from '@/app/_helpers/helpers';

const ActivityGroupCard = ({ group, i }: { group: Activity[], i: number }) => {

	const { data: activityGroup, loading: loadingActGoups, error: errorActGoups } = useRecordById<'activity_groups'>({
		table: 'activity_groups', eq: { column: 'id', id: group[0].activity_group_id!! }
	});

	console.log(activityGroup)

	if (!activityGroup) {
		return null
	}

	const { images } = activityGroup[0]

	const arrayImages = getArrayOfImages(images)

	//const image = activityGroups ? activityGroups!.filter(groupAct => groupAct.id === group[0]?.activity_group_id)[0]!.image!.toString() : ''

	return (
		<div className="card flex flex-col-reverse md:card-side bg-secondary shadow-xl min-h-[424px]" id={group[0]?.activity_group_id!!} >
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
					<a className="btn btn-primary btn-outline btn-sm" href={"/" + group[0]?.activity_group_id}>Planos e Detalhes</a>
					<a className="btn btn-accent text-white btn-sm" href="/agendar-avaliacao">Agendar Avaliação</a>
				</div>

			</div>
			<div className='w-full lg:w-1/2 p-4 relative'>

				<figure className='p-5'><Image src={arrayImages ? arrayImages[0] : ''} alt="treino" style={{ objectFit: 'cover', padding: '1rem' }} fill /></figure>
			</div>
		</div>
	)
}

export default ActivityGroupCard