// in src/posts.jsx
import { List, Datagrid, TextField, DateField, BooleanField, ReferenceField, EditButton, TextInput, SimpleFormIterator, ArrayInput, ArrayField } from 'react-admin';

export const PlansList = () => (
	<List>
		<Datagrid>
			<TextField source="title" label={'Nome'} />
			<BooleanField source='fixed' label={'Fixado na Home'} />
			<BooleanField source='default_selected_plan' label={'Selecionado Inicialmente'} />

			<ReferenceField source="activity_group_id" label={'Grupo da Atividade'} reference="activity_groups" >
				<TextField source="title" />
			</ReferenceField>

			<ReferenceField source="plan_type_id" label={'Tipo de Plano'} reference="plan_types" >
				<TextField source="title" />
			</ReferenceField>
			<ArrayField source="prices" label={'Preços'}>
				<Datagrid bulkActionButtons={false}>
					<TextField source="title" label={'Frequência'} />
					<TextField source="value" label={'Valor'} />
				</Datagrid>
			</ArrayField>
			<>
				<EditButton />
			</>
		</Datagrid>
	</List>
);

