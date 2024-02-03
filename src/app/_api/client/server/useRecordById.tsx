import { useState, useEffect } from 'react';
import { createClient } from "../../../_supabase/server";
import { Database, Tables } from '@/types/generated.supabase';
import { cookies } from 'next/headers';

type SupabaseTables = keyof Database["public"]["Tables"];

const useRecordById = <T extends SupabaseTables>({ table, eq }: { eq: { column: string, id: string }, table: T }) => {
	const [data, setData] = useState<Tables<T>[]>();
	const [loading, setLoading] = useState<boolean>(true);
	const [error, setError] = useState<string | null>(null);
	const cookiestore = cookies()
	useEffect(() => {
		const fetchData = async () => {
			try {
				const supabaseClient = createClient(cookiestore);
				const { data, error } = await supabaseClient
					.from(table)
					.select('*')
					.eq(eq?.column, eq?.id);

				if (error) {
					setError(error.message);
				} else {
					// Verificar se 'data' é um array e não é um erro
					if (Array.isArray(data)) {
						if (data.length > 0 && !('message' in data[0])) {
							setData(data as Tables<T>[]);
						} else {
							//setData();
						}
					} else {
						setData(data as Tables<T>[]);
					}
				}
			} catch (error) {
				// Em caso de erro, definir o estado de erro
				setError('Erro ao obter dados do servidor.');
			} finally {
				setLoading(false);
			}
		};

		fetchData();
	}, [table, eq, cookiestore]);

	return { data, loading, error };
};

export default useRecordById;
