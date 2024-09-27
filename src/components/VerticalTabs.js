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

  // Determine the active tab based on the current location
  const currentPath = location.pathname;

  // Find the first matching tabRoute that the current path starts with
  const value = tabRoutes.findIndex(route => currentPath.startsWith(route));

  const handleChange = (event, newValue) => {
    const newRoute = tabRoutes[newValue];

    // Check if the URL is a project detail page by looking for a project ID at the end
    const isProjectDetailPage = currentPath.split("/").length === 4 && !isNaN(currentPath.split("/").pop());

    // If on a project detail page and the same tab is clicked, navigate back to the gallery
    if (isProjectDetailPage && currentPath.startsWith(newRoute)) {
      // Remove the project ID part from the URL and navigate to the gallery view
      navigate(newRoute, { replace: true }); // Force navigation back to the gallery
    } else if (currentPath === newRoute) {
      // If you're already on the same tab, force re-navigation to refresh the gallery
      navigate(newRoute, { replace: true });
    } else {
      // Navigate to the selected tab as usual
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
              wordBreak: 'break-word',  // Break words when necessary
              '.MuiTab-wrapper': {
                width: '100%',
                justifyContent: 'flex-end',  // Ensure the wrapper aligns content to the right
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
