import Image from "next/image";
import Hero from "./_components/Hero";
import ActivityCard from "./_components/ActivityCard";

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col bg-neutral-800 justify-center ">
			<Hero />
			<div className="container flex flex-col gap-8 items-center self-center justify-center pt-16 px-32">
				<ActivityCard />
				<ActivityCard />
				<ActivityCard />
			</div>
		</main>
	);
}
