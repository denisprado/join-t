'use client'
import { createClient } from "../_supabase/client";

const fetchTable = async ({ table, fields, eq }: { table: string, fields: string, eq: { column: string, value: string } }) => {

	const supabaseClient = createClient()

	const { data, error } = await supabaseClient
		.from(table)
		.select(fields)
		.eq(eq.column, eq.value)
	console.log(error, "data", data)
	return data
}

export default fetchTable
