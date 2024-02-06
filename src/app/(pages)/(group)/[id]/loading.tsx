import Curves from "@/app/_components/Curves";
import SkeletonCard from "@/app/_components/SkeletonCard";

export default function Loading() {
	// Or a custom loading skeleton component
	return (
		<div className="w-full flex flex-col justify-start items-center p-8">
			<div className="container flex flex-col gap-4 justify-center items-center py-16">
				<SkeletonCard />
				<SkeletonCard />
			</div>
			<Curves color="primary-revert" />
			<div className="w-full flex flex-col pt-8 bg-primary items-center " >
				<div className="container self-center px-0 lg:px-10 py-16">
					<SkeletonCard />
					<SkeletonCard />
				</div>
			</div>
		</div>)

}
