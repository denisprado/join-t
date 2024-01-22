import seed from "./(seed)/seed";
import ActivityGroupCard from "./_components/ActivityGroupCard";
import Hero from "./_components/Hero";

export interface Activity {
	id: string;
	name: string;
	description: string;
	teatcher: string;
	schedules: string;
	images: string[];
	videos?: string | string[];
	group: string;
}


function groupBy<T>(array: T[], key: keyof T): Record<string, T[]> {
	return array.reduce((grouped, item) => {
		const keyValue = item[key] as string;
		const itemWithoutKey = { ...item };
		delete itemWithoutKey[key];

		if (!grouped[keyValue]) {
			grouped[keyValue] = [];
		}

		grouped[keyValue].push(itemWithoutKey);

		return grouped;
	}, {} as Record<string, T[]>);
}


export default function Home() {
	const groupedActivities = groupBy(seed.activities, 'group');
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
