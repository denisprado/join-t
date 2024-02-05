import { ImageField, ImageInput, SimpleForm } from "react-admin";

const MediaSimpleForm = () => {
	return (
		<SimpleForm>
			<ImageInput source="images" label="Imagens" multiple>
				<ImageField source="src" title="title" />
			</ImageInput>
			<ImageInput source="videos" label="Videos" multiple>
				<ImageField source="src" title="title" />
			</ImageInput>
		</SimpleForm>
	)
}

export default MediaSimpleForm