import React from "react";
import {
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  useTheme,
} from "@mui/material";
import {
  SettingsOutlined,
  SettingOutLined,
  ChevronLeft,
  Person,
  HomeOutline,
  Groups2Outlined,
  ReceiptLongOutlined,
  PointOfSaleOutlined,
  TodayOutlined,
  CalendarMonth,
  AdminPanelSettingsOutlined,
  TrendingUpOutlined,
  PieChartOutlined,
  AssessmentOutlined,
  PeopleAltOutlined,
  MenuBookOutlined,
  ArticleOutlined,
  AssignmentOutlined,
  AnalyticsOutlined,
  GradingOutlined,
  GradeOutlined,
  Home,
  ChevronRightOutlined,
} from "@mui/icons-material";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import FlexBetween from "./FlexBetween";
import profileImage from "assets/profile.png";
import brand from "assets/sage.png";

const navItems = [
  {
    text: "Dashboard",
    icon: <Home />,
    path: "dashboard"
  },
  {
    text: "Student Activities",
    icon: null,
    path: "student/activities"
  },
  {
    text: "Overview",
    icon: <ArticleOutlined />,
    path: "overview"
  },
  {
    text: "Sessions",
    icon: <PeopleAltOutlined />,
    path: "sessions"
  },
  {
    text: "Course Content Tracking",
    icon: null
  },
  {
    text: "Contents",
    icon: <AssignmentOutlined />,
    path: "contents"
  },
  {
    text: "Interaction",
    icon: <TrendingUpOutlined />,
    path: "interaction"
  },
  {
    text: "Completion",
    icon: <AnalyticsOutlined />,
    path: "completion"
  },
  {
    text: "Assessment Tracking",
    icon: null,
  },
  {
    text: "Grades",
    icon: <GradingOutlined />,
    path: "grades"
  },
  {
    text: "Monitoring Tools",
    icon: null,
    path: "monitoring"
  },
  {
    text: "Module Grades",
    icon: <MenuBookOutlined />,
    path: "module-grades"
  },
  // {
  //   text: "Course Contents",
  //   icon: <AssessmentOutlined />,
  //   path: "course content"
  // },
  {
    text: "No Instructor Courses",
    icon: <MenuBookOutlined />,
    path: "no-instructor/courses"
  },
  {
    text: "Instructor Ussage",
    icon: <Person />,
    path: "instructor-ussage"
  },
  {
    text: "Access Pattern",
    icon: <PieChartOutlined />,
    path: "access-pattern"
  },
];

const Sidebar = ({
  user,
  drawerWidth,
  isSidebarOpen,
  setIsSidebarOpen,
  isNonMobile,
}) => {
  const { pathname } = useLocation();
  const [active, setActive] = useState("");
  const navigate = useNavigate();
  const theme = useTheme();

  useEffect(() => {
    setActive(pathname.substring(1));
  }, [pathname]);

  return (
    <Box component="nav">
      {isSidebarOpen && (
        <Drawer
          open={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
          variant="persistent"
          anchor="left"
          sx={{
            width: drawerWidth,
            "& .MuiDrawer-paper": {
              color: theme.palette.secondary[200],
              backgroundColor: theme.palette.background.alt,
              boxSixing: "border-box",
              borderWidth: isNonMobile ? 0 : "2px",
              width: drawerWidth,
            },
          }}
        >
          <Box width="100%">
            <Box m="1rem 3rem 1rem 1rem">
              <FlexBetween color={theme.palette.secondary.main}>
                <Box
                  component="img"
                  src={brand}
                  height="100%"
                  width="100%"
                  sx={{ objectFit: "cover" }}
                ></Box>
                {!isNonMobile && (
                  <IconButton onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
                    <ChevronLeft />
                  </IconButton>
                )}
              </FlexBetween>
            </Box>
            <List>
              {navItems.map(({ text, icon, path }) => {
                if (!icon) {
                  return (
                    <Typography key={text} sx={{ m: "2.25rem 0 1rem 3rem" }}>
                      {text}
                    </Typography>
                  );
                }
                const lcText = path;

                return (
                  <ListItem key={text} disablePadding>
                    <ListItemButton
                      onClick={() => {
                        navigate(`/${lcText}`);
                        setActive(lcText);
                      }}
                      sx={{
                        backgroundColor:
                          active === lcText
                            ? theme.palette.secondary[700]
                            : "transparent",
                        color:
                          active === lcText
                            ? theme.palette.primary[800]
                            : theme.palette.secondary[900],
                      }}
                    >
                      <ListItemIcon
                        sx={{
                          ml: "0.5rem",
                          color:
                            active === lcText
                              ? theme.palette.primary[600]
                              : theme.palette.secondary[200],
                        }}
                      >
                        {icon}
                      </ListItemIcon>
                      <ListItemText primary={text} />
                      {active === lcText && (
                        <ChevronRightOutlined sx={{ ml: "auto" }} />
                      )}
                    </ListItemButton>
                  </ListItem>
                );
              })}
            </List>
          </Box>

          {/* <Box position="absolute" bottom="1rem">
            <Divider />
            <FlexBetween
              textTransform="none"
              gap="3rem"
              m="1.5rem 2 rem 0 3 rem"
            >
              <Box
                component="img"
                alt="profile"
                src={profileImage}
                height="40px"
                width="40px"
                borderRadius="50%"
                sx={{ objectFit: "cover" }}
              />
                <Box textAlign="left">
                  <Typography
                    fontWeight="bold"
                    fontSize="1rem"
                    sx={{ color: theme.palette.secondary[100] }}
                  >
                    USER
                  </Typography>
                  <Typography
                    fontSize="0.8rem"
                    sx={{ color: theme.palette.secondary[100] }}
                  >
                    CCIS ADMIN
                  </Typography>
                </Box>
                <SettingsOutlined 
                  sx={{color: theme.palette.secondary[300], fontSize: "25px"}}
                />
            </FlexBetween>
          </Box> */}
        </Drawer>
      )}
    </Box>
  );
};

export default Sidebar;
