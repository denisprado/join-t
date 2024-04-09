import { getArrayOfImages } from "@/app/_helpers/helpers";
import { Tables } from "@/types/generated.supabase";
import dynamic from "next/dynamic";

const DynamicEmblaCarousel = dynamic(() => import('../Carousel'), { ssr: false });

const ActivityCard = ({ activity }: { activity: Tables<'activity'> }) => {
	const { images } = activity

	const arrayImages = getArrayOfImages(images)

	return (
		<div className="mx-8 w-full">
			<div className="card lg:card-side bg-secondary shadow-xl w-full">
				<div className="card-body lg:w-2/3 xl:w-1/3">
					<div className='flex flex-col gap-8'>
						<div className='flex flex-col gap-4'>
							<h2 className="card-title  text-3xl sm:text-5xl font-medium text-primary font-serif ">{activity.name}</h2>
							<p className='font-sans' dangerouslySetInnerHTML={{ __html: activity.description! }}></p>
						</div>
						<div className='flex flex-row xl:flex-col gap-8'>
							<div>
								<h3 className='font-serif text-primary'>Professor(a)</h3>
								<p>{activity.teacher}</p>
							</div>
							<div>
								<h3 className='font-serif text-primary'>Horários</h3>
								<p className='font-sans' dangerouslySetInnerHTML={{ __html: activity.schedules! }}></p>
							</div>
						</div>
					</div>
				</div>
				<div className="w-2/3 p-5 self-center">
					<DynamicEmblaCarousel videos={activity.videos && activity.videos.length > 0 ? activity.videos : null} images={arrayImages} />
				</div>
			</div>
			<div className="min-w-0">

			</div>
		</div>
	)
}

export default ActivityCard