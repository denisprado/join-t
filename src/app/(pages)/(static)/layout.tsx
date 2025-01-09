'use client'
import ActivitiesMenu from "@/app/_components/ActivitiesMenu"
import Curves from "@/app/_components/Curves"
import Image from "next/image"

import { ReactNode } from "react"

const About = ({ children }: { children: ReactNode }) => {
	return (
		<>
			<div className="flex flex-col items-center">
				<ActivitiesMenu layout="horizontal" />


				{children}
			</div>

		</>
	)
}

export default About