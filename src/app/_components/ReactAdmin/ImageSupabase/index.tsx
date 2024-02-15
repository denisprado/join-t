import { useRecordContext } from "react-admin";
import Image from 'next/image'
const ImageSupabase = ({ source }: { source: string }) => {
	const record = useRecordContext();
	console.log(record)
	const objRecord = typeof record === 'string' ? JSON.parse(record as unknown as string) : record
	const title = objRecord.title

	return record && title ? <Image src={process.env.NEXT_PUBLIC_SUPABASE_STORAGE + '/' + title} alt={title} width={150} height={150} quality={80} className='m-2 w-auto h-auto'></Image> : null;
}

export default ImageSupabase