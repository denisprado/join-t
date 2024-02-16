'use client'

import { ActivityCreate } from '@/app/_components/ReactAdmin/Activity/Create';
import { ActivityEdit } from '@/app/_components/ReactAdmin/Activity/Edit';
import { ActivityList } from '@/app/_components/ReactAdmin/Activity/List';
import { ActivityGroupsCreate } from '@/app/_components/ReactAdmin/ActivityGroups/Create';
import { ActivityGroupsEdit } from '@/app/_components/ReactAdmin/ActivityGroups/Edit';
import { ActivityGroupsList } from '@/app/_components/ReactAdmin/ActivityGroups/List';
import { PlansCreate } from '@/app/_components/ReactAdmin/Plans/Create';
import { PlansEdit } from '@/app/_components/ReactAdmin/Plans/Edit';
import { PlansList } from '@/app/_components/ReactAdmin/Plans/List';
import { PlansTypesEdit } from '@/app/_components/ReactAdmin/PlansTypes/Edit';
import { PlansTypesList } from '@/app/_components/ReactAdmin/PlansTypes/List';
import { authProvider } from '@/app/_supabase/authProvider';
import { dataProvider } from '@/app/_supabase/dataProvider';
import { ForgotPasswordPage, LoginPage, SetPasswordPage } from 'ra-supabase-ui-materialui';
import { Admin, CustomRoutes, EditGuesser, ListGuesser, Resource, ShowGuesser } from 'react-admin';
import { Route } from 'react-router-dom';
import { MyLayout } from './DevLayout';
import { QuoteEdit } from '@/app/_components/ReactAdmin/Quote/Edit';
import { QuoteCreate } from '@/app/_components/ReactAdmin/Quote/Create';
import { QuoteList } from '@/app/_components/ReactAdmin/Quote/List';

const MyAdmin = () => (

	<Admin
		title={'JoinT'}
		layout={MyLayout}
		basename="/admin"
		dataProvider={dataProvider}
		authProvider={authProvider}
		loginPage={LoginPage}
	>
		<CustomRoutes noLayout>
			<Route
				path={SetPasswordPage.path}
				element={<SetPasswordPage />}
			/>
			<Route
				path={ForgotPasswordPage.path}
				element={<ForgotPasswordPage />}
			/>
		</CustomRoutes>
		<Resource name="activity" list={ActivityList} edit={ActivityEdit} options={{ label: 'Atividades' }} show={ShowGuesser} create={ActivityCreate} />
		<Resource name="activity_groups" list={ActivityGroupsList} edit={ActivityGroupsEdit} show={ShowGuesser} options={{ label: 'Grupo de Atividades' }} create={ActivityGroupsCreate} />
		<Resource name="plans" list={PlansList} edit={PlansEdit} show={PlansCreate} options={{ label: 'Planos' }} create={PlansCreate} />
		<Resource name="terms_groups" list={ListGuesser} edit={EditGuesser} show={ShowGuesser} options={{ label: 'Grupos de Condições' }} create={EditGuesser} />
		<Resource name="plan_types" list={PlansTypesList} edit={PlansTypesEdit} show={ShowGuesser} options={{ label: 'Tipos de Plano' }} create={EditGuesser} />
		<Resource name="profile" list={ListGuesser} edit={EditGuesser} show={ShowGuesser} options={{ label: 'Redes Sociais e Contatos' }} create={EditGuesser} />
		<Resource name="quote" list={QuoteList} edit={QuoteEdit} show={ShowGuesser} options={{ label: 'Depoimentos de Alunos' }} create={QuoteCreate} />

	</Admin>

);

export default MyAdmin