import seed from "@/app/(seed)/seed"
import { Plans, TermGroups } from "@/types"
import Markdown from "react-markdown"

const Conditions = ({ plan }: { plan: Plans }) => {
	const terms = seed?.termsGroup?.filter(term => plan.termsGroup === term.id)[0]?.terms

	return (
		<div className="border columns-2 p-4 rounded-md bg-yellow-500 border-secondary">
			{terms?.map((term: { title: string, value: string }) => (
				<div className="flex flex-col gap-0 mb-2" key={term.title}>
					<h3 className="text-secondary text-sm font-serif font-semibold">{term.title}</h3>
					<Markdown className="text-secondary text-sm">{term.value}</Markdown>
				</div>
			))}
		</div>
	)
}

export default Conditions