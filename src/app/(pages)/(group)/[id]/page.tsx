import seed from "@/app/(seed)/seed";
import ActivityCard from "@/app/_components/ActivityCard";

export default function GroupPage({ params }: { params: { id: string } }) {
	const activities = seed.activities.filter(act => act.group === params.id)
	return (
		<div className="w-full flex justify-center items-center pt-8">
			<div className="container flex flex-col gap-4 justify-center items-center">
				{activities.map((act, i) => {
					return (
						<ActivityCard key={act.id} activity={act}></ActivityCard>
					)
				})}
			</div>
		</div>
	)
}