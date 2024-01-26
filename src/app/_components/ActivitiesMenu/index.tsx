import seed from "@/app/(seed)/seed"

const ActivitiesMenu = ({ layout = 'vertical' }: { layout: 'vertical' | 'horizontal' }) => {
	const menuLayoutClass = 'menu' + layout
	return (
		layout === 'vertical' ? <ul className={`menu bg-yellow-500 w-56 p-0 [&_li>*]:rounded-none [&_li>*]:border-b [&_li>*]:border-secondary [&_li>*]:font-sans ${menuLayoutClass}`}>
			{seed.activities.map((act) => {
				return (
					<li key={act.id} className="hover:bg-yellow-300"><a href={`#${seed.activityGroups.filter(group => group.id === act.activityGroup)[0]?.id}`}>{act.name}</a></li>
				)
			})}
		</ul>
			:
			<ul className={`menu menu-horizontal border-b border-secondary items-center justify-center bg-yellow-500 w-full p-0 [&_li>*]:rounded-none [&_li>*]:font-sans ${menuLayoutClass}`}>
				{seed.activities.map((act) => {
					return (
						<li key={act.id} className="hover:bg-yellow-300 text-secondary"><a href={`/${seed.activityGroups.filter(group => group.id === act.activityGroup)[0]?.id}`}>{act.name}</a></li>
					)
				})}
			</ul>

	)
}

export default ActivitiesMenu