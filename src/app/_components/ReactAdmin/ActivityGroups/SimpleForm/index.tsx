import { ImageField, ImageInput, SimpleForm, TextInput } from "react-admin";

const ActivityGroupsSimpleForm = () => {
	return (
		<SimpleForm>
			<TextInput source="title" fullWidth />
			<ImageInput source="image" label="Related pictures" multiple>
				<ImageField source="path" title="title" />
			</ImageInput>
			<ImageInput source="video" label="Related pictures" multiple>
				<ImageField source="fullPath" title="title" />
			</ImageInput>
		</SimpleForm>
	)
}

export default ActivityGroupsSimpleForm