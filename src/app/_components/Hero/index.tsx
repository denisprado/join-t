import Image from "next/image"
import ActivitiesMenu from "../ActivitiesMenu"
import Curves from "../Curves"

const Hero = () => {
	return (
		<div>
			<div className="hero min-h-fit bg-primary text-secondary lg:py-40">
				<div className="hero-content flex-col lg:flex-row bg-primary">
					<div>
						<h1 className="text-4xl lg:text-6xl font-bold font-serif">Resgate sua liberdade de movimento com nosso treinamento personalizado.</h1>
						<p className="py-6 font-serif text-2xl">Venha conhecer novas formas de se movimentar.</p>
					</div>
					<div className="relative">
						<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
							<ActivitiesMenu layout="vertical"></ActivitiesMenu>
						</div>
						<Image src="/hero-image.png" className="max-w-xs sm:max-w-sm md:max-w-md" width={1030} height={542} alt={'hero-background-people-working out'} />
					</div>
				</div>
			</div>
			<div><Curves /></div>
		</div>
	)
}

export default Hero