// in src/posts.jsx
import { Datagrid, EditButton, ImageField, List } from 'react-admin';

export const MediaList = () => (
	<List>
		<Datagrid>
			<ImageField source="images" src="url" title="desc" />
			<>
				<EditButton />
			</>
		</Datagrid>
	</List>
);

