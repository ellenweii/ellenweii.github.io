import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { useNavigate, useLocation, Outlet } from 'react-router-dom';

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTabs() {
  const navigate = useNavigate();
  const location = useLocation();

  const tabNames = [
    "About",
    "Projects/Competitions",
    "Projects/Data Science",
    "Projects/Machine Learning/AI",
    "Projects/Finance",
    "Projects/Bioinformatics",
    "Lab",
    "Work",
    "Resume",
    "Contact"
  ];

  const tabRoutes = [
    "/about",
    "/projects/competitions",
    "/projects/data-science",
    "/projects/machine-learning-ai",
    "/projects/finance",
    "/projects/bioinformatics",
    "/lab",
    "/work",
    "/resume",
    "/contact"
  ];

  // Determine the active tab based on the current location
  const currentPath = location.pathname;
  const value = tabRoutes.findIndex(route => route === currentPath);

  const handleChange = (event, newValue) => {
    navigate(tabRoutes[newValue]);
  };

  return (
    <Box
      sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', minHeight: '100vh' }}
    >
      <Tabs
        orientation="vertical"
        variant="fullWidth"
        value={value !== -1 ? value : 0}  // Default to 0 if no match
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: 'divider', minWidth: '25%', maxWidth: '25%' }}
      >
        {tabNames.map((tabName, index) => (
          <Tab 
            key={index} 
            label={tabName} 
            {...a11yProps(index)} 
            sx={{ position: 'relative', top: '10vh' }} 
          />
        ))}
      </Tabs>

      {/* Render the content for the selected tab */}
      <Box sx={{ flexGrow: 1 }}>
        <Outlet />
      </Box>
    </Box>
  );
}
