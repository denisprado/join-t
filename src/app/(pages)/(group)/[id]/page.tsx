'use client'

import seed from "@/app/(seed)/seed";
import ActivityCard from "@/app/_components/ActivityCard/index";

import Curves from "@/app/_components/Curves/index";
import GroupsMenu from "@/app/_components/GroupsMenu/index";
import Prices from "@/app/_components/Prices/index";
import groupBy from "@/app/_helpers/helpers";
import { Plans } from "@/types/index";
import { Fragment, useState } from "react";
import Markdown from 'react-markdown'


export default function GroupPage({ params }: { params: { id: string } }) {
	const activities = seed.activities.filter(act => act.activityGroup === params.id)
	const { planType, activityGroups } = seed
	const [activePlan, setActivePlan] = useState<string>("")
	const groupedPlans = groupBy(seed.plans, 'planType');



	function handleClick(id: string) {
		setActivePlan(id)

	}

	const PlanMenu = ({ plans }:{plans:Plans[]}) => {

		return <>
		{plans?.map((plan) => {
			return (
				<ul className="flex flex-col" key={plan.id}>
					<li onClick={() => handleClick(plan.id)} className={`p-4 cursor-pointer ${plan.id === activePlan ? "bg-secondary text-primary" : "border-b border-secondary"}`}>
						<a >{plan.title} </a>
					</li>
				</ul>
			)
		})}</>
	}

	return (
		<div className="w-full flex flex-col justify-start items-center">
			<GroupsMenu layout={"horizontal"}/>
			<div className="container flex flex-col gap-4 justify-center items-center py-16">
				{activities.map((act, i) => {
					return (
						<ActivityCard key={act.id} activity={act}></ActivityCard>
					)
				})}
			</div>
			<Curves color="primary-revert" />
			<div className="w-full flex flex-col pt-8 bg-primary justify-start min-h-full">
				<div role="tablist" className="tabs tabs-bordered font-sans text-secondary container self-center">
					{planType.map(g => {

						const activityGroupsByPlanType = Object.keys(groupedPlans)
							.map((group) => ({
								group,
								plans: groupedPlans[group].filter((plan) => plan.planType === g.id)
							}))
							.filter((item) => item.plans.length > 0);

						return (
							<Fragment key={g.id}>
								<input type="radio" name="my_tabs_1" role="tab" className="tab tab-lg font-sans text-secondary border-black" aria-label={g.title} defaultChecked={g.id === "1"} />
								<div role="tabpanel" className="tab-content">
									<div className="flex flex-col gap-4 py-10">
										<h2 className="text-2xl font-serif text-secondary">{activityGroups[0].title}</h2>
										<div className="flex gap-4 py-4">

											{activityGroupsByPlanType.map(((g, i) => {
												return (
													<div className="w-40" key={i}>
														<PlanMenu plans={g.plans} />
													</div>
												)
											}))}

											{activityGroupsByPlanType.map(((g, i) => {

												return (
													<div className="flex-1 w-full" key={i}>
														{g.plans.map(plan => {


															const terms = seed?.termGroups?.filter(term => plan.conditions === term.id)[0]?.terms

															return (

																<div className="flex gap-4">
																	{plan.id === activePlan &&
																		<div className="border w-1/2 columns-2 p-4 rounded-md  border-secondary">
																			{terms?.map(term => (
																				<div className="flex flex-col gap-0 mb-2" key={term.title}>
																					<h3 className="text-secondary text-base">{term.title}</h3>
																					<Markdown className="text-secondary text-sm">{term.value}</Markdown>
																				</div>
																			))}
																		</div>
																	}
																	{plan.id === activePlan &&
																		<div>
																			<Prices prices={plan.prices}></Prices>
																		</div>
																	}
																</div>
															)
														}
														)
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
	)
}