import { ImageInput, SimpleForm, TextInput } from "react-admin";
import ImageSupabase from "../../ImageSupabase";

const ActivityGroupsSimpleForm = () => {
	return (
		<SimpleForm>
			<TextInput source="title" fullWidth />
			<ImageInput source="images" label="Imagens" multiple>
				<ImageSupabase source="title" />
			</ImageInput>
		</SimpleForm>
	)
}

export default ActivityGroupsSimpleForm