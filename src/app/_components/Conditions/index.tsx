'use client'
import useRecordById from "@/app/_api/client/useRecordById";
import { Tables } from "@/types/generated.supabase";
import Markdown from "react-markdown";

interface Term {
	title: string;
	value: string;
}

interface TermGroup {
	terms: Term;
}


const Conditions = ({ plan }: { plan: Tables<'plans'> }) => {


	const { data: termsGroup } = useRecordById({ table: 'terms_groups', eq: { column: 'id', id: plan.terms_group_id! } });
	const group = termsGroup && termsGroup[0]
	const terms = group && group.terms!
	return (
		<div className="border md:columns-2 p-4 rounded-md bg-yellow-500 border-secondary ">
			{termsGroup && terms!.map((term, i) => (
				<div className="flex flex-col gap-0 mb-2 break-inside-avoid-column" key={i}>
					<h3 className="text-secondary text-sm font-serif font-semibold">{term?.title}</h3>
					<Markdown className="text-secondary text-sm">{term?.value}</Markdown>
				</div>
			))}
		</div>
	);
};

export default Conditions;
