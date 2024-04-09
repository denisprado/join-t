'use client'

import { Activity } from "@/types/index";
import { useEffect } from "react";
import useAllRecords from "./_api/client/useAllRecords";
import useRecordById from "./_api/client/useRecordById";
import ActivityGroupCard from "./_components/ActivityGroupCard";
import Curves from "./_components/Curves";
import Hero from "./_components/Hero";
import Prices from "./_components/Prices";
import QuoteCard from "./_components/QuoteCard";
import { handleIntersection, observeElements, observerOptions } from "./_helpers/_animation";
import groupBy, { findMinValue } from "./_helpers/helpers";



export default function Home() {
	const { data: activities, loading, error } = useAllRecords<'activity'>({
		table: 'activity'
	});

	const { data: treinosPlans, loading: loadingplans, error: errorplans } = useRecordById<'plans'>({
		table: 'plans',
		eq: {
			column: 'fixed',
			id: true
		}
	});

	const { data: quotes, loading: loadingQuotes, error: errorQuotes } = useAllRecords<'quote'>({
		table: 'quote'
	});


	const { data: activityGroups, loading: loadingactivityGroups, error: erroractivityGroups } = useAllRecords<'activity_groups'>({
		table: 'activity_groups'
	});



	const groupedActivities = groupBy(activities!, 'activity_group_id');
	const mappedGroups: Activity[][] = groupedActivities
		? Object.entries(groupedActivities).map(([key, group]) => {
			const modifiedGroup = group.map((item: Activity) => ({ ...item, activity_group_id: item.activity_group_id }));
			return modifiedGroup;
		})
		: [];


	const minValue: number | undefined = treinosPlans && findMinValue(treinosPlans);

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

	const MappedGroups = () => {
		return (mappedGroups &&
			mappedGroups.map((group, i) => {
				return <ActivityGroupCard group={group} key={i} i={i} />
			}))
	}





	return (
		<main className="animatedContainer flex min-h-screen flex-col bg-neutral-800 justify-start ">

			<Hero />

			<div className="fade-in container flex flex-col gap-8 items-center self-center justify-center pt-24 px-8 2xl:px-32">
				<MappedGroups />
			</div>

			<div className="divider divider-neutral w-full self-center py-12 lg:py-16"></div>

			<div className="container flex flex-col lg:flex-row lg:gap-8 items-start self-center justify-center px-8 2xl:px-32">
				<div className="p-8 lg:text-4xl w-full lg:w-3/12 border-2  border-primary mb-8">
					<h2 className="font-serif text-primary text-3xl">Alguns depoimentos de alunes Join-T</h2>
				</div>
				<div className=" flex flex-col gap-6 w-full lg:w-10/12 ">
					{quotes && quotes!.map((quote, i) => {
						return <QuoteCard quote={quote} key={i} i={i} revert={i % 2 !== 0} />
					})}
				</div>
			</div>

			<div className="flex flex-col items-start self-center justify-center py-12 w-full">
				<Curves color="primary-revert" />
				<div className="bg-primary w-full p-8 lg:p-20 self-center justify-center flex flex-col items-center gap-12">

					<h2 className="font-serif text-secondary text-4xl">Planos a partir de R${minValue},00</h2>
					<div className="fade-in flex flex-row flex-wrap gap-6 w-full justify-center">
						{treinosPlans?.map((plan, i) => {
							return <Prices key={i} plan={plan} showButton={false} />
						})}
					</div>
					{treinosPlans && <div className="flex flex-col lg:flex-row gap-2">
						<a className="btn btn-secondary btn-outline btn-md text-primary" href={`/${activityGroups && activityGroups!.filter(group => group.id === treinosPlans[0].activity_group_id)[0]?.id}`}>Ver detalhes dos planos</a>
						<a className="btn btn-accent text-white btn-md" href={'/agendar-avaliacao'}>Agendar Avaliação de Movimento</a>
					</div>}
				</div>
				<Curves color="primary" />
			</div>

		</main>
	);
}
