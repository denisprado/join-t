import { Plans } from "@/types"

const Prices = ({ plan, showButton = true }: { plan: Plans, showButton: boolean }) => (
	<div className="text-primary">
		<ul className="menu p-4 rounded-lg bg-secondary text-primary">
			<h3 className="font-serif text-2xl mb-2 max-w-48">{plan.title}</h3>
			{plan.prices.map((price, i) => (
				<div key={i} className="flex p-2 text-yellow gap-4 border-b border-b-yellow-400 first:border-t first:border-t-yellow-400 last:border-b-0 font-sans">
					<div className="text-md text-primary">{price.title}</div>
					<div className="text-md text-primary">{price.value}</div>
				</div>
			))}
			{showButton && <a href="/agendar-avaliacao" className="btn btn-accent text-white mt-4 btn-sm">Agendar Avaliação</a>}
		</ul>
	</div>
)

export default Prices