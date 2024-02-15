import { RichTextInput } from 'ra-input-rich-text';
import { ArrayInput, ImageField, ImageInput, SimpleForm, TextInput } from "react-admin";

const ActivitySimpleForm = () => {
	return (
		<SimpleForm>
			<TextInput source="name" fullWidth />
			<RichTextInput source="description" fullWidth />
			<RichTextInput source="schedules" fullWidth />
			<TextInput source="teacher" fullWidth />
			<ImageInput source="images" label="Imagens" multiple>
				<ImageField source="src" title="title" />
			</ImageInput>


		</SimpleForm>
	)
}

export default ActivitySimpleForm