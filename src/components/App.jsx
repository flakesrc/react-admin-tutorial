// in src/App.js
import * as React from "react";
import { Admin, Resource } from "react-admin";
import { UserList } from "components/Users";
import { PostList, PostEdit, PostCreate } from "components/Posts";
import jsonServerProvider from "ra-data-json-server";
import PostIcon from "@material-ui/icons/Book";
import UserIcon from "@material-ui/icons/Group";
import Dashboard from "components/Dashboard";
import authProvider from "auth/authProvider";

const dataProvider = jsonServerProvider("https://jsonplaceholder.typicode.com");

const App = () => (
	<Admin
		authProvider={authProvider}
		dashboard={Dashboard}
		dataProvider={dataProvider}>
		<Resource
			name="posts"
			list={PostList}
			edit={PostEdit}
			create={PostCreate}
			icon={PostIcon}
		/>
		<Resource name="users" list={UserList} icon={UserIcon} />
	</Admin>
);

export default App;
