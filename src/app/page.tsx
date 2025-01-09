'use client'
import { Activity, Plans } from "@/types/index";
import seed from "./(seed)/seed";
import ActivityGroupCard from "./_components/ActivityGroupCard";
import Curves from "./_components/Curves";
import Hero from "./_components/Hero";
import Prices from "./_components/Prices";
import QuoteCard from "./_components/QuoteCard";
import groupBy, { findMinValue } from "./_helpers/helpers";
import { Element } from 'react-scroll';
import { useEffect } from "react";
import { handleIntersection, observeElements, observerOptions } from "./_helpers/_animation";



export default function Home() {
	const groupedActivities = groupBy(seed.activities, 'activityGroup');
	const mappedGroups: Activity[][] = Object.entries(groupedActivities).map(([key, group]) => {
		const modifiedGroup = group.map((item: any) => ({ ...item, activityGroup: item.activityGroup }));
		return modifiedGroup;
	});

	const treinosPlans = seed.plans.filter(plan => plan.fixed === true)

	const minValue = findMinValue(treinosPlans);

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

	return (
		<main className="animatedContainer flex min-h-screen flex-col bg-neutral-800 justify-start ">
			<Hero />
			<div className="container flex flex-col gap-8 items-center self-center justify-center pt-24 px-8 2xl:px-32">
				{mappedGroups.map((group, i) => {
					return <div key={i} className="fade-in"><ActivityGroupCard group={group} key={i} i={i} /></div>
				})}
			</div>

			<div className="divider divider-neutral w-full self-center py-12 lg:py-16"></div>

			<div className="fade-in container flex flex-col lg:flex-row lg:gap-8 items-start self-center justify-center px-8 2xl:px-16">
				<div className="p-8 lg:text-4xl w-full lg:w-3/12 border-2  border-primary  fade-in">
					<h2 className="font-serif text-primary text-3xl ">Alguns depoimentos de alunes Join-T</h2>
				</div>
				<div className="flex flex-col gap-6 w-full lg:w-10/12 ">
					{seed.quotes.map((quote, i) => {
						return <div className={`fade-in`} key={i}>
							<QuoteCard quote={quote} key={i} i={i} revert={i % 2 !== 0} />
						</div>
					})}
				</div>
			</div>

			<div className="flex flex-col items-start self-center justify-center py-12 w-full" id="valores">
				<Curves color="primary-revert" />
				<div className="bg-primary w-full p-8 lg:p-20 self-center justify-center flex flex-col items-center gap-12">

					<h2 className="font-serif text-secondary text-4xl fade-in">Planos a partir de R${minValue},00</h2>
					<div className="flex flex-row flex-wrap gap-6 w-full justify-center">
						{treinosPlans.map((plan, i) => {
							return <div className={``} key={i}><div className="fade-in"><Prices key={i} plan={plan} showButton={false} /></div></div>
						})}
					</div>
					<div className="fade-in flex flex-col lg:flex-row gap-2">
						<a className="btn btn-secondary btn-outline btn-md text-primary" href={`/${seed.activityGroups.filter(group => group.id === treinosPlans[0].activityGroup)[0]?.id}`}>Ver detalhes dos planos</a>
						<a className="btn btn-accent text-white btn-md" href={'/agendar-avaliacao'}>Agendar Avaliação de Movimento</a>
					</div>
				</div>
				<Curves color="primary" />
			</div>

		</main>
	);
}
