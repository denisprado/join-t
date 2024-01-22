import { Activity } from '@/app/page'
import Image from 'next/image'

const ActivityCard = ({ activity }: { activity: Activity }) => {

	return (
		<div className="card lg:card-side bg-secondary shadow-xl w-full"  >
			<div className="card-body w-1/2">
				<h2 className="card-title text-primary font-serif text-4xl">{activity.name}</h2>
				<p className='font-sans'>{activity.description}</p>
				<h3 className='font-serif text-2xl text-primary'>Professor</h3>
				<p>{activity.teatcher}</p>
				<h3 className='font-serif text-2xl text-primary'>Horários</h3>
				<p className='font-sans'>{activity.schedules}</p>
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