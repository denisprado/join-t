import Image from 'next/image';
import { RichTextInput } from 'ra-input-rich-text';
import { ImageInput, SimpleForm, TextInput, useRecordContext } from "react-admin";
import ImageSupabase from '../../ImageSupabase';
const ActivitySimpleForm = () => {

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