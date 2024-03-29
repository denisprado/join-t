'use client'

import seed from "@/app/(seed)/seed"
import Link from 'next/link'
import { usePathname } from "next/navigation"
const GroupsMenu = ({ layout = 'vertical' }: { layout: 'vertical' | 'horizontal' }) => {
	const menuLayoutClass = 'menu-' + layout
	const currentRoute = usePathname()
	return (
		<div className="flex w-full flex-col items-center bg-black">

			<ul className={`menu menu-horizontal menu-md text-neutral-400 p-0 justify-center [&_li>*]:rounded-none  [&_li>*]:font-sans [&_li>*]:mr-1 [&_li>*]:rounded-t-md ${menuLayoutClass}`}>
				{seed.activityGroups.map(group => {
					return (
						<li key={group.id} className={currentRoute === "/" + group.id ? "text-secondary-content bg-neutral-800 border-b-none rounded-t-md" : ' flex'}><Link href={`/${group.id}`}>{group.title}</Link></li>
					)
				})}

			</ul>
		</div>
	)
}

export default GroupsMenu