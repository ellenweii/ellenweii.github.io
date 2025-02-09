import * as React from "react";
import { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate, useLocation, Link, Outlet } from "react-router-dom";

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTabs() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const tabNames = [
    "About",
    "Projects/Competitions",
    "Projects/Data Science",
    "Projects/Machine Learning-AI",
    "Projects/Finance",
    //"Projects/Bioinformatics",
    "Lab",
    "Work",
    "Resume",
    "Contact",
  ];

  const tabRoutes = [
    "/about",
    "/projects/competitions",
    "/projects/data-science",
    "/projects/machine-learning-ai",
    "/projects/finance",
    //"/projects/bioinformatics",
    "/lab",
    "/work",
    "/resume",
    "/contact",
  ];

  const currentPath = location.pathname;
  const isProjectDetailPage = currentPath.match(/\/projects\/[^/]+\/\d+/);
  const value = tabRoutes.findIndex((route) =>
    currentPath.startsWith(route)
  );

  const handleChange = (event, newValue) => {
    const newRoute = tabRoutes[newValue];

    if (isProjectDetailPage && currentPath.startsWith(newRoute)) {
      navigate(newRoute, { replace: true });
    } else if (!isProjectDetailPage && currentPath === newRoute) {
      navigate(newRoute, { replace: true });
    } else {
      navigate(newRoute);
    }
    setDrawerOpen(false); // Close drawer after navigation
  };

  return (
    <Box
      sx={{
        display: "flex",
        minHeight: "100vh",
      }}
    >
      {/* Sidebar Area (Hamburger appears here on mobile) */}
      <Box
        sx={{
          width: { xs: "15%", md: "25%" }, // Small width for mobile, normal for desktop
          display: "flex",
          minWidth: { xs: "15%"},
          maxWidth: { xs: "15%", md: "30%"},
          flexDirection: "column",
          alignItems: "flex-end", // Aligns hamburger and labels to the right
          borderRight: 1,
          borderColor: "divider",
          position: "relative",
        }}
      >
        {/* Hamburger Menu for Mobile (Appears inside sidebar space) */}
        <IconButton
          edge="end"
          color="inherit"
          aria-label="menu"
          sx={{
            display: { xs: "block", md: "none" }, // Show only on mobile
            position: "absolute",
            top: "1rem",
            right: "0.5rem", // Align to the right where labels used to be
            zIndex: 1000,
          }}
          onClick={() => setDrawerOpen(true)}
        >
          <MenuIcon />
        </IconButton>

        {/* Vertical Tabs for Desktop */}
        <Tabs
          orientation="vertical"
          variant="fullWidth"
          value={value !== -1 ? value : 0}
          onChange={handleChange}
          aria-label="Vertical tabs example"
          sx={{
            display: { xs: "none", md: "flex" }, // Hide on mobile
            textAlign: "right",
            justifyContent: "flex-end",
            alignItems: "flex-end",
          }}
        >
          {tabNames.map((tabName, index) => (
            <Tab
              key={index}
              label={
                <Link
                  to={tabRoutes[index]}
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  {tabName}
                </Link>
              }
              {...a11yProps(index)}
              sx={{
                textAlign: "right",
                justifyContent: "flex-end",
                alignItems: "flex-end",
              }}
            />
          ))}
        </Tabs>
      </Box>

      {/* Drawer for Mobile */}
      <Drawer
        anchor="left"
        open={isDrawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        <Box
          sx={{
            width: 250,
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end", // Aligns content to the right
            padding: 2,
          }}
        >
          {/* Close Button */}
          <IconButton
            onClick={() => setDrawerOpen(false)}
            sx={{ alignSelf: "flex-end" }}
          >
            <CloseIcon />
          </IconButton>

          {/* Mobile Menu with Right-Aligned Labels */}
          <Tabs
            orientation="vertical"
            value={value !== -1 ? value : 0}
            onChange={handleChange}
            aria-label="Vertical tabs example"
            sx={{
              textAlign: "right", // Align text to the right
              width: "100%", // Ensure full width usage
              "& .MuiTab-root": {
                justifyContent: "flex-end", // Align tab content to the right
                textAlign: "right",
              },
            }}
          >
            {tabNames.map((tabName, index) => (
              <Tab
                key={index}
                label={tabName}
                {...a11yProps(index)}
                sx={{
                  textAlign: "right",
                  justifyContent: "flex-end",
                  alignItems: "flex-end",
                }}
              />
            ))}
          </Tabs>
        </Box>
      </Drawer>

      {/* Render Content */}
      <Box sx={{ flexGrow: 1 }}>
        <Outlet />
      </Box>
    </Box>
  );
}
