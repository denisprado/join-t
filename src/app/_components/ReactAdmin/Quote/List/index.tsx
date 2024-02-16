// in src/posts.jsx
import { List, Datagrid, TextField, DateField, BooleanField, ReferenceField, EditButton, ImageField } from 'react-admin';
import ImageSupabase from '../../ImageSupabase';

export const QuoteList = () => (
	<List>
		<Datagrid>
			<TextField source="excerpt" label={'Frase de destaque'} />
			<TextField source="quote" label={'Depoimento completo'} />
			<TextField source="author" label={'Autor'} />


			<ImageSupabase source="title" />

			<>
				<EditButton />
			</>
		</Datagrid>
	</List>
);

