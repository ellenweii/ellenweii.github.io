import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { useNavigate, useLocation, Link, Outlet } from 'react-router-dom';

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

  const currentPath = location.pathname;
  const isProjectDetailPage = currentPath.match(/\/projects\/[^/]+\/\d+/);
  const value = tabRoutes.findIndex(route => currentPath.startsWith(route));

  const handleChange = (event, newValue) => {
    const newRoute = tabRoutes[newValue];

    if (isProjectDetailPage && currentPath.startsWith(newRoute)) {
      navigate(newRoute, { replace: true }); // Navigate back to the gallery view
    } else if (!isProjectDetailPage && currentPath === newRoute) {
      navigate(newRoute, { replace: true });
    } else {
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
        value={value !== -1 ? value : 0}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: 'divider', minWidth: '25%', maxWidth: '25%' }}
      >
        {tabNames.map((tabName, index) => (
          <Tab
            key={index}
            label={<Link to={tabRoutes[index]}
            style={{
              textDecoration: 'none', // Remove underline
              color: 'inherit', // Keep the text color the same as the rest of the text
            }}
            >
              {tabName}</Link>} // Use Link for each tab
            {...a11yProps(index)}
            sx={{
              position: 'relative',
              top: '8vh',
              textAlign: 'right',
              justifyContent: 'flex-end',
              alignItems: 'flex-end',
              whiteSpace: 'normal',
              wordBreak: 'break-word',
              overflow: 'hidden',
              '.MuiTab-wrapper': {
                width: '80%',
                justifyContent: 'flex-end',
                fontSize: {
                  xs: '0.5rem',
                  sm: '0.75rem',
                  md: '0.85rem',
                  lg: '1rem',
                },
                lineHeight: {
                  xs: '3.0',
                  sm: '1.5',
                  md: '1.3',
                  lg: '1.2',
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
