import React from "react";
import {
	List,
	Datagrid,
	TextField,
	ReferenceField,
	EditButton,
	SimpleForm,
	Create,
	TextInput,
	ReferenceInput,
	Edit,
	SelectInput,
	Filter,
	SimpleList,
} from "react-admin";
import { useMediaQuery } from "@material-ui/core";

const PostTitle = ({ record }) => (
	<span>{record ? `${record.title}` : ""}</span>
);

const PostFilter = (props) => (
	<Filter {...props}>
		<TextInput label="Search" source="q" alwaysOn />
		<ReferenceInput
			label="User"
			source="userId"
			reference="users"
			allowEmpty>
			<SelectInput optionText="name" />
		</ReferenceInput>
	</Filter>
);

export const PostCreate = (props) => (
	<Create {...props}>
		<SimpleForm>
			<ReferenceInput source="userId" reference="users">
				<SelectInput optionText="name" />
			</ReferenceInput>
			<TextInput source="title" />
			<TextInput multiline source="body" />
		</SimpleForm>
	</Create>
);

export const PostEdit = (props) => (
	<Edit title={<PostTitle />} {...props}>
		<SimpleForm>
			<TextInput disabled source="id" />
			<ReferenceInput source="userId" reference="users">
				<SelectInput optionText="name" />
			</ReferenceInput>
			<TextInput source="title" />
			<TextInput multiline source="body" />
		</SimpleForm>
	</Edit>
);

export const PostList = (props) => {
	const isSmall = useMediaQuery((theme) => theme.breakpoints.down("sm"));
	return (
		<List filters={<PostFilter />} {...props}>
			{isSmall ? (
				<SimpleList
					primaryText={(record) => record.title}
					// views e published_at retornam undefined
					// secondaryText={(record) => `${record.views} views`}
					// tertiaryText={(record) =>
					// 	new Date(record.published_at).toLocaleDateString()
					// }
				/>
			) : (
				<Datagrid>
					<TextField source="id" />
					<ReferenceField
						label="User"
						source="userId"
						reference="users">
						<TextField source="name" />
					</ReferenceField>
					<TextField source="title" />
					<TextField source="body" />
					<EditButton />
				</Datagrid>
			)}
		</List>
	);
};