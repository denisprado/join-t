'use client'

import { Admin, CustomRoutes, Resource, ListGuesser, EditGuesser, ShowGuesser } from 'react-admin';
import { LoginPage, ForgotPasswordPage, SetPasswordPage } from 'ra-supabase-ui-materialui';
import { BrowserRouter, Route } from 'react-router-dom';
import { dataProvider } from '../app/_supabase/dataProvider';
import { authProvider } from '../app/_supabase/authProvider';

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
		<Resource name="activity" list={ListGuesser} edit={EditGuesser} />
		<Resource name="activity_groups" list={ListGuesser} edit={EditGuesser} show={ShowGuesser} />
		<Resource name="plans" list={ListGuesser} edit={EditGuesser} show={ShowGuesser} />
		<Resource name="plan_types" list={ListGuesser} edit={EditGuesser} show={ShowGuesser} />
		<Resource name="profile" list={ListGuesser} edit={EditGuesser} show={ShowGuesser} />
		<Resource name="quote" list={ListGuesser} edit={EditGuesser} show={ShowGuesser} />
		<Resource name="activity" list={ListGuesser} edit={EditGuesser} show={ShowGuesser} />
		<Resource name="terms_groups" list={ListGuesser} edit={EditGuesser} show={ShowGuesser} />
	</Admin>

);

export default MyAdmin