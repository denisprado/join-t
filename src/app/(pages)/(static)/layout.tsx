import Curves from "@/app/_components/Curves"
import Image from "next/image"

import { ReactNode } from "react"

const About = ({ children }: { children: ReactNode }) => {
	return (
		<>
			<div className="flex flex-col items-center">
				<div className="hero min-h-fit bg-primary text-secondary py-40">
					<div className="hero-content text-center bg-primary">
						<div className="relative">
							<Image src="/logo-paginas.png" className="max-w-sm" width={1030} height={542} alt={'hero-background-people-working out'} />
						</div>
					</div>
				</div>

				{children}
			</div>
			<div><Curves /></div>
		</>
	)
}

export default About