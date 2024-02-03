import { RichTextInput } from 'ra-input-rich-text';
import { SimpleForm, TextInput } from "react-admin";

const ActivitySimpleForm = () => {
	return (
		<SimpleForm>
			<TextInput source="name" fullWidth />

			<RichTextInput source="description" fullWidth />
			<RichTextInput source="schedules" fullWidth />
			<TextInput source="teacher" fullWidth />

		</SimpleForm>
	)
}

export default ActivitySimpleForm