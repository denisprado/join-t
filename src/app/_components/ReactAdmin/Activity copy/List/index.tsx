// in src/posts.jsx
import { List, Datagrid, TextField, DateField, BooleanField, ReferenceField, EditButton } from 'react-admin';

export const ActivityList = () => (
	<List>
		<Datagrid>
			<TextField source="name" label={'Nome'} />
			<TextField source="description" label={'Descrição'} />
			<TextField source="schedules" label={'Horários'} />
			<TextField source="teacher" label={'Professor(a)'} />
			<ReferenceField source="activity_group_id" label={'Grupo da Atividade'} reference="activity_groups" ><TextField source="title" /></ReferenceField>
			<>
				<EditButton />
			</>
		</Datagrid>
	</List>
);

