import { TabPanel } from '@mui/lab';
import { React } from 'react';
import MediaType from '../component/MediaType';
import MediaOperator from '../component/MediaOperator';
import MediaFeatures from '../component/MediaFeatures';

const Fields = [MediaType, MediaOperator, MediaFeatures];

const TabCategories = (context) => Fields.map((Tab, index) =>
	<TabPanel key={ index } value={ String(index + 1) }>
		<Tab { ...context }/></TabPanel>);

export default TabCategories;
