import { Activity } from "@/types/index";
import seed from "./(seed)/seed";
import ActivityGroupCard from "./_components/ActivityGroupCard";
import Hero from "./_components/Hero";
import groupBy from "./_helpers/helpers";



export default function Home() {
	const groupedActivities = groupBy(seed.activities, 'activityGroup');
	const mappedGroups: Activity[][] = Object.entries(groupedActivities).map(([key, group]) => {
		const modifiedGroup = group.map((item: any) => ({ ...item }));
		return modifiedGroup;
	});

	return (
		<main className="flex min-h-screen flex-col bg-neutral-800 justify-start ">
			<Hero />
			<div className="container flex flex-col gap-8 items-center self-center justify-center pt-16 px-32">
				{mappedGroups.map((group, i) => {
					return <ActivityGroupCard group={group} key={i} i={i} />
				})}
			</div>
		</main>
	);
}
