import { Tables } from "@/types/generated.supabase"

const PlanMenu = ({ plans, planType, activePlan, handleClick, id }: { plans: Tables<'plans'>[], planType: Tables<'plan_types'>, activePlan: string, handleClick: (id: string) => void, id: string }) => {

	const plansToShow = plans.filter(plan => plan.plan_type_id === planType.id && plan.activity_group_id === id)
	const clasLinkAnimation = 'transition duration-300 hover:duration-500 transition-delay-200 hover:transition-delay-300'

	return <ul className="flex xl:flex-col min-w-44" >
		{plansToShow?.map((plan, i) => {
			return (
				<li key={plan.id} onClick={() => handleClick(plan.id)} className={`py-2 px-4 cursor-pointer hover:bg-yellow-300 hover:text-secondary border-y  border-secondary hover:border-y hover:first:border-y 
				xl:border-b-0 hover:xl:border-b-0  hover:border-secondary ${(plan.id === activePlan) ? "bg-secondary text-primary" : "border-b border-secondary"} ${clasLinkAnimation}`}>
					<a>{plan.title} </a>
				</li>
			)
		})}
	</ul>
}

export default PlanMenu