// in src/posts.jsx
import { List, Datagrid, TextField, DateField, BooleanField, ReferenceField, EditButton, TextInput, SimpleFormIterator, ArrayInput, ArrayField, RichTextField } from 'react-admin';

export const PlansTypesList = () => (
	<List>
		<Datagrid>
			<TextField source="title" label={'Nome'} />
			<RichTextField source="disclaimer" />
			<>
				<EditButton />
			</>
		</Datagrid>
	</List>
);

