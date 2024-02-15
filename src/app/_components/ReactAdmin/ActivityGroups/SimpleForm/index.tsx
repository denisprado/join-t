import { ImageField, ImageInput, SimpleForm, TextInput } from "react-admin";

const ActivityGroupsSimpleForm = () => {
	return (
		<SimpleForm>
			<TextInput source="title" fullWidth />
			<ImageInput source="images" label="Imagens" multiple>
				<ImageField source="src" title="title" />
			</ImageInput>
		</SimpleForm>
	)
}

export default ActivityGroupsSimpleForm