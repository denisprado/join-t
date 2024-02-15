import { JSX } from 'react';
import { Layout, LayoutProps } from 'react-admin';
import { ReactQueryDevtools } from 'react-query/devtools';

export const MyLayout = (props: JSX.IntrinsicAttributes & LayoutProps) => (
	<>
		<Layout {...props} />
		<ReactQueryDevtools initialIsOpen={true} />
	</>
);