import Image from "next/image"
import ActivitiesMenu from "../ActivitiesMenu"
import Curves from "../Curves"

const Hero = () => {
	return (
		<div>
			<div className="hero min-h-fit bg-primary text-secondary py-40">
				<div className="hero-content flex-col lg:flex-row-reverse bg-primary">
					<div className="relative">
						<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
							<ActivitiesMenu layout="vertical"></ActivitiesMenu>
						</div>
						<Image src="/hero-image.png" className="max-w-sm" width={1030} height={542} alt={'hero-background-people-working out'} />
					</div>
					<div>
						<h1 className="text-6xl font-bold font-serif">Resgate sua liberdade de movimento com nosso treinamento personalizado.</h1>
						<p className="py-6 font-serif text-xl">Junte-se a nós na jornada para alcançar seu potencial máximo!</p>
					</div>
				</div>
			</div>
			<div><Curves /></div>
		</div>
	)
}

export default Hero