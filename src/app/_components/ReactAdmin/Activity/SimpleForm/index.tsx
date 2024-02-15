import get from 'lodash/get';
import Image from 'next/image';
import { RichTextInput } from 'ra-input-rich-text';
import { ImageInput, SimpleForm, TextInput, useRecordContext } from "react-admin";
const ActivitySimpleForm = () => {
	const ImageSupabase = ({ source }: { source: string }) => {
		const record = useRecordContext();
		console.log(JSON.parse(record as unknown as string))
		const objRecord = JSON.parse(record as unknown as string)
		const title = objRecord.title
		console.log(title)
		return record && title ? <Image src={process.env.NEXT_PUBLIC_SUPABASE_STORAGE + '/' + title} alt={title} width={150} height={150} quality={80} className='m-2 w-auto h-auto'></Image> : null;
	}
	return (
		<SimpleForm>
			<TextInput source="name" fullWidth />
			<RichTextInput source="description" fullWidth />
			<RichTextInput source="schedules" fullWidth />
			<TextInput source="teacher" fullWidth />
			<ImageInput source="images" label="Imagens" multiple>
				{/* <ImageField source="src" title="title" /> */}
				<ImageSupabase source="title" />
			</ImageInput>
		</SimpleForm>
	)
}

export default ActivitySimpleForm