import Curves from "@/app/_components/Curves"
import Image from "next/image"

import { ReactNode } from "react"

const About = ({ children }: { children: ReactNode }) => {
	return (
		<>
			<div className="py-10">
				{children}
			</div>
			<div><Curves color="secondary" /></div>
		</>
	)
}

export default About