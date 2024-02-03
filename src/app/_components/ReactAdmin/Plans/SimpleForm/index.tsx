import { RichTextInput } from 'ra-input-rich-text';
import { ArrayInput, BooleanInput, ReferenceArrayInput, ReferenceInput, SelectInput, SimpleForm, SimpleFormIterator, TextInput } from "react-admin";

const PlansSimpleForm = () => {
	return (
		<SimpleForm>
			<TextInput source="title" label={'Nome do Plano'} />
			<BooleanInput source='fixed' label={'Fixado na Home page'} />
			<BooleanInput source='default_selected_plan' label={'Plano sera inicialmente selecionado na sua aba.'} />
			<ReferenceInput source={'plan_type_id'} reference='plan_types' label={'Tipo de PLano'} ><SelectInput optionText="title" label={'Tipo de PLano'} /></ReferenceInput>
			<ReferenceInput source={'terms_group_id'} reference='terms_groups' label={'Grupo de Condições'}>
				<SelectInput optionText="title" label={'Grupo de Condições'} />
			</ReferenceInput>
			<ArrayInput source="prices" label={'Preços'}>
				<SimpleFormIterator inline>
					<TextInput source="title" helperText={false} label={'Frequência'} />
					<TextInput source="value" helperText={false} label={'valor'} />
				</SimpleFormIterator>
			</ArrayInput>

		</SimpleForm>
	)
}

export default PlansSimpleForm