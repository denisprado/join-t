'use client'

import useAllRecords from "@/app/_api/client/useAllRecords";
import useRecordById from "@/app/_api/client/useRecordById";
import ActivityCard from "@/app/_components/ActivityCard/index";
import Conditions from "@/app/_components/Conditions";
import Curves from "@/app/_components/Curves/index";
import GroupsMenu from "@/app/_components/GroupsMenu/index";
import PlanMenu from "@/app/_components/PlanMenu";
import Prices from "@/app/_components/Prices/index";
import { handleIntersection, observeElements, observerOptions } from "@/app/_helpers/_animation";
import groupBy from "@/app/_helpers/helpers";
import { PlanType, Plans } from "@/types";
import { Tables } from "@/types/generated.supabase";
import { Fragment, useCallback, useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";

export default function GroupPage({ params }: { params: { id: string } }) {
	const { id } = params

	const { data: activities, error: errorActivities } = useRecordById<'activity'>({
		eq: { column: 'activity_group_id', id },
		table: 'activity'
	});

	const { data: planType, error: errorPlanType } = useAllRecords<'plan_types'>({
		table: 'plan_types'
	});

	const { data: activityGroups, error: errorActivitiesGroups } = useAllRecords<'activity_groups'>({
		table: 'activity_groups'
	});

	const { data: plans, error: errorPlans } = useAllRecords<'plans'>({
		table: 'plans'
	});


	const groupedPlans = groupBy(plans!, 'plan_type_id');
	const { data: plansOfThisGroup } = useRecordById({ table: 'plans', eq: { column: 'activity_group_id', id: id } })

	const [activePlanType, setActivePlanType] = useState(planType ? planType[0].id! : '')

	const [activePlan, setActivePlan] = useState<string>('')

	useEffect(() => {
		const initialSelectedPlan = plansOfThisGroup && plansOfThisGroup.filter(plan => plan.plan_type_id === activePlanType && plan.default_selected_plan === true)[0]?.id!
		console.log(initialSelectedPlan)
		setActivePlanType(planType ? planType[0].id! : '')
		initialSelectedPlan && setActivePlan(initialSelectedPlan)
	}, [plansOfThisGroup])


	// plano inicialmente seleionado é o primeiro do mesmo grupo de atividade
	const handleChangeTabs = (type: string) => {
		setActivePlanType(type)
		console.log("type", type)
		const newSelectedPlan = plansOfThisGroup && plansOfThisGroup.filter(plan => plan.plan_type_id === type && plan.default_selected_plan === true)[0]?.id!
		setActivePlan(newSelectedPlan ? newSelectedPlan : '');
	};

	function handleClick(id: string) {
		setActivePlan(id)
	}

	useEffect(() => {


		const observer = new IntersectionObserver(handleIntersection, observerOptions);

		// Observa a primeira div com a classe 'container'
		const containerElement = document.querySelector('.animatedContainer') as HTMLElement | null;
		if (containerElement) {
			observer.observe(containerElement);
		}

		// Observa todos os elementos com a classe 'fade-in'
		observeElements(observer, '.fade-in', 0.05);

		// Limpe o observer quando o componente for desmontado
		return () => {
			observer.disconnect();
		};
	}, []);

	const PlanMenu = ({ plans, planType }: { plans: Plans[], planType: PlanType }) => {

		const plansToShow = plans.filter(plan => plan.plan_type_id === planType.id && plan.activity_group_id === id)
		return <ul className="flex xl:flex-col min-w-44" >
			{plansToShow?.map((plan, i) => {
				return (
					<li key={plan.id} onClick={() => handleClick(plan.id)} className={`py-2 px-4 cursor-pointer hover:bg-yellow-300 hover:text-secondary border-y  border-secondary hover:border-y hover:first:border-y 
					xl:border-b-0 hover:xl:border-b-0  hover:border-secondary ${(plan.id === activePlan) ? "bg-secondary text-primary" : "border-b border-secondary"}`}>
						<a>{plan.title} </a>
					</li>
				)
			})}
		</ul>

	}

	const planTypesWithPlans = planType && planType!.filter(type => {
		const plansForType = groupedPlans && Object.keys(groupedPlans!)
			.map(group => groupedPlans[group])
			.flat()
			.filter(plan => plan.plan_type_id === type.id && plan.activity_group_id === id);

		return plansForType && plansForType!.length > 0;
	});



	return (
		<div className="animatedContainer w-full flex flex-col justify-start items-center">
			<GroupsMenu layout={"horizontal"} />

			{/** 
			 * 
			 * 
			 * Cards das Atividades  
			 * 
			 * 
			 * */}
			<div className="container flex flex-col gap-4 justify-center items-center py-16">
				{activities?.map((act, i) => {
					return (
						<ActivityCard key={i} activity={act}></ActivityCard>
					)
				})}
			</div>
			<Curves color="primary-revert" />


			{/** 
				 * 
				 * 
				 * Componentes de planos
				 * 
				 * 
				 * */}
			<div className="w-full flex flex-col pt-8 bg-primary items-center " >
				<div className="container self-center px-0 lg:px-10 py-16">

					{/** 
				 * Componentes de TABS
				 * */}
					<div role="tablist" className="tabs tabs-bordered [--tab-border-color:black] tab-lg font-sans text-secondary self-center mx-10">
						{planTypesWithPlans && planTypesWithPlans.map((type, indexTab) => {
							// Tabs
							const activityGroupsByPlanType = Object.keys(groupedPlans)
								.map((group) => ({
									group,
									plans: groupedPlans[group].filter((plan) => plan.plan_type_id === type.id)
								}))
								.filter((item) => item.plans.length > 0);

							const activityGroupsTitle = activityGroups && activityGroups.filter(group => group.id === id)[0]?.title
							// Conteúdo das tabs
							return (
								<Fragment key={type.id}>

									<input type="radio" data-theme={'cyberpunk'} onClick={() => handleChangeTabs(type.id)}
										name="my_tabs_1"
										role="tab" defaultChecked={indexTab === 0}
										className={`tab text-lg text-secondary font-sans min-w-40 bg-yellow-400 checked:bg-yellow-500 checked:font-semibold hover:bg-yellow-300 [--tab-border-color:black]`}
										aria-label={type.title || ''} />
									<div role="tabpanel" className="tab-content" >
										<div className="flex flex-col gap-8 py-10">
											<h2 className="text-5xl font-medium font-serif text-secondary">{activityGroupsTitle}</h2>
											<div className="flex flex-col xl:flex-row gap-2 md:gap-5 py-4">

												{activityGroupsByPlanType.map(((ag, i) => {
													return (
														<PlanMenu key={i} plans={ag.plans} planType={type} />
													)
												}))}

												{activityGroupsByPlanType.map(((g, i) => {

													return (
														<div className="" key={i}>
															{g.plans.map(plan => {
																return (
																	<div className="flex gap-2 md:gap-5 " key={plan.id}>
																		{(plan.id === activePlan) &&
																			<div className="flex flex-col gap-4">
																				<Conditions plan={plan} />
																				{!!type.disclaimer && <div className="flex flex-col border border-secondary rounded-md">
																					<div dangerouslySetInnerHTML={{ __html: type.disclaimer }} className={'p-4'}></div>
																				</div>}

																			</div>
																		}
																		{(plan.id === activePlan) &&
																			<Prices plan={plan} showButton></Prices>
																		}

																	</div>
																)
															})
															}
														</div>
													)
												}))}
											</div>
										</div>
									</div>
								</Fragment>
							)
						}
						)}
					</div>
				</div>
			</div>
			<Curves />
		</div>
	)
}