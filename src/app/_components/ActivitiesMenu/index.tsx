import seed from "@/app/(seed)/seed"

const ActivitiesMenu = ({ layout = 'vertical' }: { layout: 'vertical' | 'horizontal' }) => {
	const menuLayoutClass = 'menu' + layout
	return (
		<ul className={`menu bg-yellow-500 w-56 p-0 [&_li>*]:rounded-none [&_li>*]:border-b [&_li>*]:border-secondary [&_li>*]:font-sans ${menuLayoutClass}`}>
			{seed.activities.map((act) => {
				return (
					<li key={act.id} className="hover:bg-yellow-300"><a href={`#${seed.activityGroups.filter(group => group.id === act.activityGroup)[0]?.id}`}>{act.name}</a></li>
				)
			})}


		</ul>
	)
}

export default ActivitiesMenu