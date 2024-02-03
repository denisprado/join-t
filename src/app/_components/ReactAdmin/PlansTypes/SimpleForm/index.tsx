import { RichTextInput } from 'ra-input-rich-text';
import { ArrayInput, BooleanInput, ReferenceArrayInput, ReferenceInput, SelectInput, SimpleForm, SimpleFormIterator, TextInput } from "react-admin";

const PlansTypesSimpleForm = () => {
	return (
		<SimpleForm>
			<TextInput source="title" label={'Nome'} />
			<RichTextInput source="disclaimer" label={'Avisos'} />
		</SimpleForm>
	)
}

export default PlansTypesSimpleForm