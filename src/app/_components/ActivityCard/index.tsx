import { Activity} from "@/types/index"
import Image from 'next/image'

const ActivityCard = ({ activity }: { activity: Activity }) => {

	return (
		<div className="card lg:card-side bg-secondary shadow-xl container"  >
			<div className="card-body w-1/2">
				<div className='flex flex-col gap-8'>
					<div className='flex flex-col gap-4'>
						<h2 className="card-title text-5xl font-medium text-primary font-serif ">{activity.name}</h2>
						<p className='font-sans'>{activity.description}</p>
					</div>
					<div className='flex flex-col gap-8'>
						<div>
							<h3 className='font-serif text-xl text-primary'>Prof.</h3>
							<p>{activity.teatcher}</p>
						</div>
						<div>
							<h3 className='font-serif text-xl text-primary'>Horários</h3>
							<p className='font-sans'>{activity.schedules}</p>
						</div>
					</div>
				</div>
			</div>
			{
				activity.images.map((image, i) => {
					return (
						<figure className='p-5' key={i}><Image src={"/" + image} alt="treino" width={800} height={1000} /></figure>
					)
				})
			}
		</div>
	)
}

export default ActivityCard