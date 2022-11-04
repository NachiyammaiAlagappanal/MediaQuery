import { React } from 'react';
import { Box } from '@mui/material';
import MenuBar from './component/MenuBar';
import Header from './component/Header';
import { TabContext, TabPanel } from '@mui/lab';
import MediaType from './component/MediaType';
import MediaOperator from './component/MediaOperator';
import MediaFeatures from './component/MediaFeatures';

const App = (context) => {
	const { state: { value }} = context;

	return <Box className="App">
		<TabContext value={ value }>
			<MenuBar { ...context }/>
			<Box width="100%">
				<Header/>
				<TabPanel value="1">
					<MediaType { ...context }/>
				</TabPanel>
				<TabPanel value="2">
					<MediaOperator { ...context }/>
				</TabPanel>
				<TabPanel value="3">
					<MediaFeatures { ...context }/>
				</TabPanel>
			</Box>
		</TabContext>
	</Box>;
};

export default App;
