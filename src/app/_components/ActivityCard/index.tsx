import { Tables } from "@/types/generated.supabase";
import dynamic from "next/dynamic";

const DynamicEmblaCarousel = dynamic(() => import('../Carousel'), { ssr: false });
interface ImageData {
	rawFile: {
		path: string;
	};
	src: string;
	title: string;
}
const ActivityCard = ({ activity }: { activity: Tables<'activity'> }) => {
	const { images } = activity

	// Definindo a expressão regular para extrair o JSON
	const regex = /({.*})/;

	// Convertendo cada string JSON em um objeto JavaScript
	const arrayDeObjetos: (ImageData | null)[] | null = images && images.map(str => {
		// Extrair o JSON válido da string
		const match = str.match(regex);
		if (match) {
			// Analisar o JSON
			return JSON.parse(match[0]) as ImageData;
		}
		return null;
	}).filter(objeto => objeto !== null);


	const arrayImages: string[] | null = arrayDeObjetos && arrayDeObjetos.map(objeto => objeto!.rawFile && process.env.NEXT_PUBLIC_SUPABASE_STORAGE + objeto!.rawFile.path);

	console.log(arrayImages)
	return (
		<div className="mx-8">
			<div className="card lg:card-side bg-secondary shadow-xl container">
				<div className="card-body lg:w-2/3 xl:w-1/3">
					<div className='flex flex-col gap-8'>
						<div className='flex flex-col gap-4'>
							<h2 className="card-title text-5xl font-medium text-primary font-serif ">{activity.name}</h2>
							<p className='font-sans' dangerouslySetInnerHTML={{ __html: activity.description! }}></p>
						</div>
						<div className='flex flex-row xl:flex-col gap-8'>
							<div>
								<h3 className='font-serif text-xl text-primary'>Professor(a)</h3>
								<p>{activity.teacher}</p>
							</div>
							<div>
								<h3 className='font-serif text-xl text-primary'>Horários</h3>
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