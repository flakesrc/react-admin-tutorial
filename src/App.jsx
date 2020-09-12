// in src/App.js
import * as React from "react";
import { Admin, Resource } from "react-admin";
import { UserList } from "Users";
import { PostList, PostEdit, PostCreate } from "Posts";
import jsonServerProvider from "ra-data-json-server";

const dataProvider = jsonServerProvider("https://jsonplaceholder.typicode.com");

const App = () => (
	<Admin dataProvider={dataProvider}>
		<Resource
			name="posts"
			list={PostList}
			edit={PostEdit}
			create={PostCreate}
		/>
		<Resource name="users" list={UserList} />
	</Admin>
);

export default App;
