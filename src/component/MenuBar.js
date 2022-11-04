import { React } from 'react';
import Tab from '@mui/material/Tab';
import { TabList } from '@mui/lab';
import { Toolbar } from '@mui/material';

const MenuBar = (context) =>
	<Toolbar className="toolbar">
		<TabList
			orientation="vertical"
			onChange={ (event, tabIndex) => context.actions
				.toggleMenu(tabIndex) }
			textColor="inherit"
		>
			<Tab value="1" label="MEDIA TYPE"/>
			<Tab value="2" label="MEDIA OPERATOR"/>
			<Tab value="3" label="MEDIA FEATURES"/>
		</TabList>
	</Toolbar>
	;

export default MenuBar;
