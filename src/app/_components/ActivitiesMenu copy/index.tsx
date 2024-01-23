import seed from "@/app/(seed)/seed"
import Link from "next/link"

const GroupsMenu = ({ layout = 'vertical' }: { layout: 'vertical' | 'horizontal' }) => {
	const menuLayoutClass = 'menu' + layout
	return (
		<div className="flex w-full flex-col items-center bg-secondary">

			<ul className={`menu menu-horizontal menu-md text-primary p-0 [&_li>*]:rounded-none [&_li>*]:border-b [&_li>*]:border-secondary [&_li>*]:font-sans ${menuLayoutClass}`}>
				{seed.activityGroups.map(group => {
					return (

						<li key={group.id}><Link href={`/${group.id}`}>{group.title}</Link></li>
					)
				})}

			</ul>
		</div>
	)
}

export default GroupsMenu