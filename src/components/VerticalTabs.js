import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import { BrowserRouter as Router, Route, Routes, useHistory } from 'react-router-dom'; // Import necessary components
import ProjectGallery from './ProjectGallery';
import ProjectDetails from '../data/projectData.js';
import About from './About'; // Import About component


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', 
      minHeight: '100vh'}}
    >
      <Tabs
        orientation="vertical"
        variant="fullWidth"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: 'divider',
          minWidth: '25%', maxWidth: '25%'
        }}
      >

        <Tab label="About" {...a11yProps(0)} 
        sx = {{position: 'relative', top: '10vh'}} />
        <Tab label="Projects/Competitions" {...a11yProps(1)}
        sx = {{position: 'relative', top: '10vh'}} />
        <Tab label="Projects/Data Science" {...a11yProps(2)}
        sx = {{position: 'relative', top: '10vh'}} />
        <Tab label="Projects/Machine Learning/AI" {...a11yProps(3)}
        sx = {{position: 'relative', top: '10vh'}} />
        <Tab label="Projects/Finance" {...a11yProps(4)}
        sx = {{position: 'relative', top: '10vh'}} />
        <Tab label="Projects/Bioinformatics" {...a11yProps(5)}
        sx = {{position: 'relative', top: '10vh'}} />
        <Tab label="Lab" {...a11yProps(6)}
        sx = {{position: 'relative', top: '10vh'}} />
        <Tab label="Work" {...a11yProps(7)}
        sx = {{position: 'relative', top: '10vh'}} />
        <Tab label="Resume" {...a11yProps(8)} 
        sx={{position: 'relative', bottom: '-30vh'}}/>
        <Tab label="Contact" {...a11yProps(9)} 
        sx={{position: 'relative', bottom: '-30vh'}}/>
      </Tabs>

      <TabPanel value={value} index={0}>
        <About />
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
      <TabPanel value={value} index={3}>
        Item Four
      </TabPanel>
      <TabPanel value={value} index={4}>
        Item Five
      </TabPanel>
      <TabPanel value={value} index={5}>
        Item Six
      </TabPanel>
      <TabPanel value={value} index={6}>
        Item Seven
      </TabPanel>
      <TabPanel value={value} index={7}>
        Item Seven
      </TabPanel>
      <TabPanel value={value} index={8}>
        Item Seven
      </TabPanel>
      <TabPanel value={value} index={9}>
        Item Seven
      </TabPanel>
      
    </Box>
  );
}