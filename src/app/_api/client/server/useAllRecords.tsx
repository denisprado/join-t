import { useState, useEffect } from 'react';
import { createClient } from "../../../_supabase/server";
import { Database } from '@/types/generated.supabase';
import { Tables } from '@/types/generated.supabase';
import { cookies } from 'next/headers';

type SupabaseTables = keyof Database["public"]["Tables"];

const useAllRecords = <T extends SupabaseTables>({ table }: { table: T }) => {
	const [data, setData] = useState<Tables<T>[] | null>(null);
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

				if (error) {
					setError(error.message);
				} else {
					// Verificar se 'data' é um array e não é um erro
					if (Array.isArray(data)) {
						if (data.length > 0 && !('message' in data[0])) {
							setData(data as Tables<T>[]);
						} else {
							setData(null);
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
	}, [table, cookiestore]);

	return { data, loading, error };
};

export default useAllRecords;
