import { Activity } from "@/types/index"
import dynamic from "next/dynamic";
import Image from 'next/image'

const DynamicEmblaCarousel = dynamic(() => import('../Carousel'), { ssr: false });

const ActivityCard = ({ activity }: { activity: Activity }) => {

	return (
		<div className="mx-8 fade-in">
			<div className="card lg:card-side bg-secondary shadow-xl container">
				<div className="card-body lg:w-2/3 xl:w-1/3">
					<div className='flex flex-col gap-8'>
						<div className='flex flex-col gap-4'>
							<h2 className="card-title text-5xl font-medium text-primary font-serif ">{activity.name}</h2>
							<p className='font-sans' dangerouslySetInnerHTML={{ __html: activity.description }}></p>
						</div>
						<div className='flex flex-row xl:flex-col gap-8'>
							<div>
								<h3 className='font-serif text-xl text-primary'>Professor(a)</h3>
								<p>{activity.teatcher}</p>
							</div>
							<div>
								<h3 className='font-serif text-xl text-primary'>Horários</h3>
								<p className='font-sans' dangerouslySetInnerHTML={{ __html: activity.schedules }}></p>
							</div>
						</div>
					</div>
				</div>
				<div className="w-2/3 p-5 self-center">
					<DynamicEmblaCarousel videos={activity.videos && activity.videos.length > 0 ? activity.videos : null} images={activity.images} />
				</div>
			</div>
			<div className="min-w-0">

			</div>
		</div>
	)
}

export default ActivityCard