import * as React from 'react';
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
    "Projects/Machine Learning-AI",
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

  // Get the current path from the URL
  const currentPath = location.pathname;

  // Detect if the current path is a project detail page by checking for an ID in the URL
  const isProjectDetailPage = currentPath.match(/\/projects\/[^/]+\/\d+/);

  // Find the active tab based on the current path
  const value = tabRoutes.findIndex(route => currentPath.startsWith(route));

  const handleChange = (event, newValue) => {
    const newRoute = tabRoutes[newValue];

    // If we're already on the tab and it's a project detail page, navigate back to the gallery view
    if (isProjectDetailPage && currentPath.startsWith(newRoute)) {
      navigate(newRoute, { replace: true }); // Navigate back to the gallery view
    } else if (!isProjectDetailPage && currentPath === newRoute) {
      // If already in the gallery and click the same tab, trigger navigation to refresh the page
      navigate(newRoute, { replace: true });
    } else {
      // Navigate to the selected tab
      navigate(newRoute);
    }
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
            sx={{ 
              position: 'relative', 
              top: '8vh',
              textAlign: 'right',  // Align the text to the right
              justifyContent: 'flex-end',  // Align the entire tab content to the right
              alignItems: 'flex-end',  // Align items within the tab to the right
              whiteSpace: 'normal',  // Allow text to wrap
              wordBreak: 'break-word',  // Break words when necessary 'break-word'
              overflow: 'hidden',

              '.MuiTab-wrapper': {
                width: '80%',
                justifyContent: 'flex-end',  // Ensure the wrapper aligns content to the right
                fontSize: {
                  xs: '0.5rem',  // Small screens like phones
                  sm: '0.75rem', // Small to medium screens
                  md: '0.85rem', // Medium screens
                  lg: '1rem',    // Large screens
                },
                lineHeight: {
                  xs: '3.0',  // Larger line height for small screens
                  sm: '1.5',  // Slightly smaller line height for medium screens
                  md: '1.3',  // Medium line height for larger screens
                  lg: '1.2',  // Smallest line height for large screens
                },
              },
            }} 
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
