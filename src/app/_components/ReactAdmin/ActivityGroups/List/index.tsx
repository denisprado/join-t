// in src/posts.jsx
import { Datagrid, EditButton, List, TextField } from 'react-admin';

export const ActivityGroupsList = () => (
	<List>
		<Datagrid>
			<TextField source="title" label={'Nome'} />
			<>
				<EditButton />
			</>
		</Datagrid>
	</List>
);

