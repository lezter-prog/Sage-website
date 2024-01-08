import React, { useState, useEffect } from "react";
import FlexBetween from "components/FlexBetween";
import Header from "components/Header";
import {
  Box,
  Button,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import StatBox from "components/StatBox";

const Dashboard = () => {
  const theme = useTheme();
  const isNonMediumScreens = useMediaQuery("(min-width: 1200px)");

  // Sample data for number of students and faculty online
  const totalStudents = 500;
  const totalFacultyOnline = 25;

  // Sample data for announcements
  const announcements = [
    "Welcome to the new semester! Check your class schedules.",
    "Faculty meeting on Friday at 3:00 PM in the conference room.",
    "Reminder: Submit your project proposals by the end of the week.",
  ];

  const [currentAnnouncementIndex, setCurrentAnnouncementIndex] = useState(0);

  // Function to handle changing announcements
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentAnnouncementIndex(
        (prevIndex) => (prevIndex + 1) % announcements.length
      );
    }, 10000); // Change announcement every 10 seconds

    return () => clearInterval(intervalId);
  }, [announcements]);

  return (
    <Box m="1.5rem 2.5rem">
      <FlexBetween>
        <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />
        <Box>
          <Button
            sx={{
              backgroundColor: theme.palette.secondary.light,
              color: theme.palette.background.alt,
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
            }}
          >
            Download Reports
          </Button>
        </Box>
      </FlexBetween>
      <Box
        mt="20px"
        display="grid"
        gridTemplateColumns="repeat(12, 2fr)"
        gridAutoRows="160px"
        gap="20px"
        sx={{
          "& > div": { gridColumn: isNonMediumScreens ? undefined : "span 12" },
        }}
      >
        {/* StatBox for Total Students */}
        <StatBox title="Total Students" value={totalStudents} />

        {/* StatBox for Faculty Online */}
        <StatBox title="Faculty Online" value={totalFacultyOnline} />

        {/* Carousel for Announcements */}
        <Box
          gridColumn="span 12"
          height="160px"
          overflow="hidden"
          position="relative"
          sx={{
            "& > div": { gridColumn: isNonMediumScreens ? undefined : "span 12" },
          }}
        >
          {announcements.map((announcement, index) => (
            <Typography
              key={index}
              variant="h5"
              mb={2}
              style={{
                margin: "1.5rem",
                position: "absolute",
                textAlign: "center",
                top: 0,
                left: 0,
                width: "100%",
                opacity: index === currentAnnouncementIndex ? 1 : 0,
                transition: "opacity 0.5s ease-in-out",
              }}
            >
              {announcement}
            </Typography>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
