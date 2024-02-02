import { Plans } from "@/types"

const Prices = ({ plan, showButton = true }: { plan: Plans, showButton: boolean }) => {
	const prices = plan.prices as { title: string, value: string }[]
	return (
		<div className="min-w-52">
			<div className="p-4 rounded-lg bg-secondary text-primary mb-4">
				<h3 className="font-serif text-2xl mb-2 max-w-48">{plan.title}</h3>
				<ul>
					{prices!.map((price, i) => (
						<li key={i} className="grid grid-cols-2 justify-center items-center py-1 text-yellow gap-2 border-b border-b-yellow-500/50 first:border-t-4 first:border-t-yellow-500/50 last:border-b-0 font-sans">
							<div className="text-md text-primary">{price.title}</div>
							<div className="text-md text-primary">{price.value}</div>
						</li>
					))}
					{showButton && <a href="/agendar-avaliacao" className="btn btn-accent text-white mt-4 w-full">Agendar Avaliação</a>}
				</ul>
			</div>
		</div>
	)
}

export default Prices