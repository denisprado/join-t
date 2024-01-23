
import Curves from "@/app/_components/Curves"


import { ReactNode } from "react"

const About = ({ children }: { children: ReactNode }) => {
	return (
		<>
			<div>
				{children}
			</div>
			<div><Curves color="secondary" /></div>
		</>
	)
}

export default About