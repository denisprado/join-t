'use client'

import { ForgotPasswordPage, LoginPage, SetPasswordPage } from 'ra-supabase-ui-materialui';
import { Admin, CustomRoutes, EditGuesser, ListGuesser, Resource, ShowGuesser } from 'react-admin';
import { Route } from 'react-router-dom';
import { authProvider } from '@/app/_supabase/authProvider';
import { dataProvider } from '@/app/_supabase/dataProvider';
import { ActivityList } from '@/app/_components/ReactAdmin/Activity/List';
import { ActivityEdit } from '@/app/_components/ReactAdmin/Activity/Edit';
import { ActivityCreate } from '@/app/_components/ReactAdmin/Activity/Create';
import { ActivityGroupsList } from '@/app/_components/ReactAdmin/ActivityGroups/List';
import { ActivityGroupsEdit } from '@/app/_components/ReactAdmin/ActivityGroups/Edit';
import { PlansList } from '@/app/_components/ReactAdmin/Plans/List';
import { PlansEdit } from '@/app/_components/ReactAdmin/Plans/Edit';
import { PlansCreate } from '@/app/_components/ReactAdmin/Plans/Create';
import { PlansTypesList } from '@/app/_components/ReactAdmin/PlansTypes/List';
import { PlansTypesEdit } from '@/app/_components/ReactAdmin/PlansTypes/Edit';
import { MediaList } from '@/app/_components/ReactAdmin/Media/List';
import { MediaEdit } from '@/app/_components/ReactAdmin/Media/Edit';
import { ActivityGroupsCreate } from '@/app/_components/ReactAdmin/ActivityGroups/Create';
import { MediaCreate } from '@/app/_components/ReactAdmin/Media/Create';

const MyAdmin = () => (

	<Admin
		title={'JoinT'}
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
		<Resource name="quote" list={ListGuesser} edit={EditGuesser} show={ShowGuesser} options={{ label: 'Depoimentos de Alunos' }} create={EditGuesser} />
		<Resource name="media" list={MediaList} edit={MediaEdit} show={ShowGuesser} options={{ label: 'Media' }} create={MediaCreate} />

	</Admin>

);

export default MyAdmin