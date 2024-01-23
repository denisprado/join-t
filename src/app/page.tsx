import { Activity } from "@/types/index";
import seed from "./(seed)/seed";
import ActivityGroupCard from "./_components/ActivityGroupCard";
import Hero from "./_components/Hero";
import QuoteCard from "./_components/QuoteCard";
import groupBy from "./_helpers/helpers";



export default function Home() {
	const groupedActivities = groupBy(seed.activities, 'activityGroup');
	const mappedGroups: Activity[][] = Object.entries(groupedActivities).map(([key, group]) => {
		const modifiedGroup = group.map((item: any) => ({ ...item, activityGroup:item.activityGroup}));
		return modifiedGroup;
	});
console.log(mappedGroups)
	return (
		<main className="flex min-h-screen flex-col bg-neutral-800 justify-start ">
			<Hero />
			<div className="container flex flex-col gap-8 items-center self-center justify-center pt-16 px-32">
				{mappedGroups.map((group, i) => {
					return <ActivityGroupCard group={group} key={i} i={i} />
				})}
			</div>

			<div className="divider divider-neutral container self-center py-24"></div>

			<div className="container flex flex-row gap-8 items-start self-center justify-center px-32">
				<h2 className="font-serif text-primary text-4xl w-2/12">Alguns depoimentos de alunes Join-T</h2>
				<div className="flex flex-col gap-6 w-full">
					{seed.quotes.map((quote, i) => {
						return <QuoteCard quote={quote} key={i} i={i} revert={i % 2 !== 0} />
					})}
				</div>
			</div>

		</main>
	);
}
