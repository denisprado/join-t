import { Activity } from "@/types/index"
import Image from 'next/image'
import { EmblaCarousel } from "../Carousel"

const ActivityCard = ({ activity }: { activity: Activity }) => {

	return (
		<>
			<div className="card lg:card-side bg-secondary shadow-xl container">
				<div className="card-body w-1/3">
					<div className='flex flex-col gap-8'>
						<div className='flex flex-col gap-4'>
							<h2 className="card-title text-5xl font-medium text-primary font-serif ">{activity.name}</h2>
							<p className='font-sans'>{activity.description}</p>
						</div>
						<div className='flex flex-col gap-8'>
							<div>
								<h3 className='font-serif text-xl text-primary'>Professor(a)</h3>
								<p>{activity.teatcher}</p>
							</div>
							<div>
								<h3 className='font-serif text-xl text-primary'>Horários</h3>
								<p className='font-sans'>{activity.schedules}</p>
							</div>
						</div>
					</div>
				</div>
				<div className="w-2/3 p-5">

					<EmblaCarousel slides={activity.images} />
				</div>
			</div>
			<div className="min-w-0">

			</div>
		</>
	)
}

export default ActivityCard