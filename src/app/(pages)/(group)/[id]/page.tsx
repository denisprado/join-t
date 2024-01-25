'use client'

import seed from "@/app/(seed)/seed";
import ActivityCard from "@/app/_components/ActivityCard/index";
import Conditions from "@/app/_components/Conditions";

import Curves from "@/app/_components/Curves/index";
import GroupsMenu from "@/app/_components/GroupsMenu/index";

import Prices from "@/app/_components/Prices/index";
import groupBy from "@/app/_helpers/helpers";
import { Plans, PlanType } from "@/types/index";
import { Fragment, SetStateAction, useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";

export default function GroupPage({ params }: { params: { id: string } }) {
	const { id } = params
	const activities = seed.activities.filter(act => act.activityGroup === id)
	const { planType, activityGroups, plans } = seed
	const groupedPlans = groupBy(seed.plans, 'planType');

	const plansDefaultChecked = plans.filter(plan => plan.defaultSelectedPLan && plan.activityGroup === id)

	// plano inicialmente seleionado é o primeiro do mesmo grupo de atividade
	const [activePlan, setActivePlan] = useState<string>(plansDefaultChecked[0].id)

	function handleChangeTab(activePlan: SetStateAction<string>) {
		setActivePlan(activePlan)
	}

	function handleClick(id: string) {
		setActivePlan(id)
	}

	const PlanMenu = ({ plans, planType }: { plans: Plans[], planType: PlanType }) => {

		const plansToShow = plans.filter(plan => plan.planType === planType.id && plan.activityGroup === id)
		return <>
			<ul className="flex flex-col" >
				{plansToShow?.map((plan, i) => {
					return (
						<li key={plan.id} onClick={() => handleClick(plan.id)} className={`py-2 px-4 cursor-pointer hover:bg-yellow-300 hover:text-secondary hover:border-b hover:first:border-y hover:border-secondary ${(plan.id === activePlan) ? "bg-secondary text-primary" : "border-b border-secondary"} ${clasLinkAnimation}`}>
							<a>{plan.title} </a>
						</li>
					)
				})}
			</ul>
		</>
	}

	const planTypesWithPlans = planType.filter(type => {
		const plansForType = Object.keys(groupedPlans)
			.map(group => groupedPlans[group])
			.flat()
			.filter(plan => plan.planType === type.id && plan.activityGroup === id);

		return plansForType.length > 0;
	});

	const clasLinkAnimation = 'transition duration-300 hover:duration-500 transition-delay-200 hover:transition-delay-300'

	return (
		<div className="w-full flex flex-col justify-start items-center">
			<GroupsMenu layout={"horizontal"} />
			<div className="container flex flex-col gap-4 justify-center items-center py-16">
				{activities.map((act, i) => {
					return (
						<ActivityCard key={act.id} activity={act}></ActivityCard>
					)
				})}
			</div>
			<Curves color="primary-revert" />
			<div className="w-full flex flex-col pt-8 bg-primary items-center min-h-[75vh]" >
				<div className="container self-center px-10 ">


					<div role="tablist" className="tabs tabs-bordered [--tab-border-color:black] tab-lg font-sans text-secondary self-center mx-10">
						{planTypesWithPlans.map((type, indexTab) => {

							const activityGroupsByPlanType = Object.keys(groupedPlans)
								.map((group) => ({
									group,
									plans: groupedPlans[group].filter((plan) => plan.planType === type.id)
								}))
								.filter((item) => item.plans.length > 0);

							const activityGroupsTitle = activityGroups.filter(group => group.id === id)[0]?.title

							return (
								<Fragment key={type.id}>

									<input type="radio" data-theme={'cyberpunk'} onClick={() => handleChangeTab(plansDefaultChecked.filter(plan => plan.planType === type.id)[0].id)} name="my_tabs_1" role="tab" defaultChecked={indexTab === 0}
										className={`tab text-lg text-secondary font-sans bg-yellow-400 checked:bg-yellow-500 hover:bg-yellow-300 [--tab-border-color:black] ${clasLinkAnimation}`}
										aria-label={type.title} />
									<div role="tabpanel" className="tab-content" >
										<div className="flex flex-col gap-8 py-10">
											<h2 className="text-5xl font-medium font-serif text-secondary">{activityGroupsTitle}</h2>
											<div className="flex gap-5 py-4">

												{activityGroupsByPlanType.map(((ag, i) => {
													return (
														<div className="w-44" key={i}>
															<PlanMenu plans={ag.plans} planType={type} />
														</div>
													)
												}))}

												{activityGroupsByPlanType.map(((g, i) => {

													return (
														<div className="flex-1 w-full" key={i}>
															{g.plans.map(plan => {
																return (
																	<div className="flex gap-8" key={plan.id}>
																		{(plan.id === activePlan) &&
																			<div className="flex flex-col gap-4">
																				<Conditions plan={plan} />
																				{!!type.disclaimer && <div className="flex flex-col border border-secondary rounded-md">
																					<ReactMarkdown className={'p-4'}>{type.disclaimer}</ReactMarkdown>
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