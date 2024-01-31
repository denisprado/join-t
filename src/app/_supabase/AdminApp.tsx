'use client'

import { Admin, CustomRoutes, Resource, ListGuesser } from 'react-admin';
import { LoginPage, ForgotPasswordPage, SetPasswordPage } from 'ra-supabase-ui-materialui';
import { BrowserRouter, Route } from 'react-router-dom';
import { dataProvider } from './dataProvider';
import { authProvider } from './authProvider';

export const MyAdmin = () => (
	<BrowserRouter>
		<Admin
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
			<Resource name="posts" list={ListGuesser} />
			<Resource name="authors" list={ListGuesser} />
		</Admin>
	</BrowserRouter>
);