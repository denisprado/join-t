'use client'

import useAllRecords from '@/app/_api/client/useAllRecords'
import Link from 'next/link'
import { usePathname } from "next/navigation"
const GroupsMenu = ({ layout = 'vertical' }: { layout: 'vertical' | 'horizontal' }) => {
	const menuLayoutClass = 'menu-' + layout
	const currentRoute = usePathname()
	const { data: activityGroups, loading: loadingActGoups, error: errorActGoups } = useAllRecords<'activity_groups'>({
		table: 'activity_groups'
	});
	return (
		<div className="flex w-full flex-col items-center bg-black">

			<ul className={`menu menu-horizontal menu-md text-neutral-400 p-0 justify-center [&_li>*]:rounded-none  [&_li>*]:font-sans [&_li>*]:mr-1 [&_li>*]:rounded-t-md ${menuLayoutClass}`}>
				{activityGroups && activityGroups!.map(group => {
					return (
						<li key={group.id} className={currentRoute === "/" + group.id ? "text-secondary-content bg-neutral-800 border-b-none rounded-t-md" : ' flex'}><Link href={`/${group.id}`}>{group.title}</Link></li>
					)
				})}

			</ul>
		</div>
	)
}

export default GroupsMenu