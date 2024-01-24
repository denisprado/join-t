'use client'

import seed from "@/app/(seed)/seed";
import ActivityCard from "@/app/_components/ActivityCard/index";
import Conditions from "@/app/_components/Conditions";

import Curves from "@/app/_components/Curves/index";
import GroupsMenu from "@/app/_components/GroupsMenu/index";

import Prices from "@/app/_components/Prices/index";
import groupBy from "@/app/_helpers/helpers";
import { Plans } from "@/types/index";
import { Fragment, SetStateAction, useEffect, useState } from "react";
import Markdown from 'react-markdown'


export default function GroupPage({ params }: { params: { id: string } }) {
	const { id } = params
	const activities = seed.activities.filter(act => act.activityGroup === id)
	const { planType, activityGroups } = seed
	const groupedPlans = groupBy(seed.plans, 'planType');

	const initialPlanDefaultChecked = planType[0].defaultSelectedPLan
	console.log(initialPlanDefaultChecked)
	const [activePlan, setActivePlan] = useState<string>(initialPlanDefaultChecked)


	function handleChangeTab(defaultActivePlan: SetStateAction<string>) {
		setActivePlan(defaultActivePlan)
	}

	function handleClick(id: string) {
		setActivePlan(id)
	}

	const PlanMenu = ({ plans }: { plans: Plans[] }) => {
		return <>
			<ul className="flex flex-col" >
				{plans?.map((plan, i) => {
					return (
						<li key={plan.id} onClick={() => handleClick(plan.id)} className={`py-3 px-4 cursor-pointer ${(plan.id === activePlan) ? "bg-secondary text-primary" : "border-b border-secondary"}`}>
							<a >{plan.title} </a>
						</li>
					)
				})}
			</ul>
		</>
	}

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
			<div className="w-full flex flex-col pt-8 bg-primary justify-start min-h-full">
				<div role="tablist" className="tabs tabs-bordered tab-lg font-sans text-secondary  container self-center">
					{planType.map((g, indexTab) => {

						const activityGroupsByPlanType = Object.keys(groupedPlans)
							.map((group) => ({
								group,
								plans: groupedPlans[group].filter((plan) => plan.planType === g.id)
							}))
							.filter((item) => item.plans.length > 0);

						const activityGroupsTitle = activityGroups.filter(group => group.id === id)[0].title

						return (
							<Fragment key={g.id}>

								<input type="radio" onClick={() => handleChangeTab(g.defaultSelectedPLan)} name="my_tabs_1" role="tab"
									className="tab text-lg text-secondary [--tab-border-color:black]"
									aria-label={g.title} defaultChecked={g.id === "1"} />
								<div role="tabpanel" className="tab-content">
									<div className="flex flex-col gap-8 py-10">
										<h2 className="text-5xl font-medium font-serif text-secondary">{activityGroupsTitle}</h2>
										<div className="flex gap-5 py-4">

											{activityGroupsByPlanType.map(((g, i) => {
												return (
													<div className="w-44" key={i}>
														<PlanMenu plans={g.plans} />
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
																		<Conditions plan={plan} />
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
			<Curves />
		</div>
	)
}