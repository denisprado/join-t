import { RichTextInput } from 'ra-input-rich-text';
import { ImageInput, SimpleForm, TextInput } from "react-admin";
import ImageSupabase from '../../ImageSupabase';
const QuoteSimpleForm = () => {

	return (
		<SimpleForm>
			<TextInput source="excerpt" label={'Frase de destaque'} fullWidth />
			<TextInput source="quote" label={'Depoimento completo'} fullWidth />
			<TextInput source="author" label={'Autor'} />

			<ImageInput source="images" label="Imagens" multiple maxSize={1}>
				{/* <ImageField source="src" title="title" /> */}
				<ImageSupabase source="title" />
			</ImageInput>
		</SimpleForm>
	)
}

export default QuoteSimpleForm