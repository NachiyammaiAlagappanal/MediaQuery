import { React } from 'react';
import { Box } from '@mui/material';
import MenuBar from './component/MenuBar';
import Header from './component/Header';
import { TabContext } from '@mui/lab';
import './App.scss';
import TabCategories from './component/TabCategories';

const App = (context) => {
	const { state: { value }} = context;

	return <Box className="App">
		<TabContext value={ value }>
			<MenuBar { ...context }/>
			<Box width="100%">
				<Header/>
				<TabCategories { ...context }/>
			</Box>
		</TabContext>
	</Box>;
};

export default App;
