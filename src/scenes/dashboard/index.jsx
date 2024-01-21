import React, { useState, useEffect } from "react";
import FlexBetween from "components/FlexBetween";
import Header from "components/Header";
import {
  Box,
  Button,
  Typography,
  useTheme,
  useMediaQuery,
  Grid,
} from "@mui/material";
import StatBox from "components/StatBox";
import { AgChartsReact } from 'ag-charts-react';
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
  const [chartOptions, setChartOptions] = useState({
    theme: "ag-default-dark",
    data: [
      
      { asset: 'Grade', amount: 43 },
      { asset: '', amount: 57 },
      
  ],
  // series: [{ type: 'bar', xKey: 'month', yKey: 'iceCreamSales' }],
  series: [{ 
    type: 'pie', 
    angleKey: 'amount', 
    legendItemKey: 'amount', 
    calloutLabelKey: 'asset', 
    innerRadiusRatio: 0.7,
    sectorLabel:{
      formatter:(data)=>{
          return data+"%";
      }
    },
    innerLabels: [
      {
          text: 'Avarage Grade',
          fontWeight: 'bold',
      }
    ],
  innerCircle: {
      fill: 'transparent',
  },
  }],
  title:{
    text:'BS in Computer Science Average Grade'
  },
  background:{
    fill:'transparent'
  }
    // ...
});
const [chartOptions2, setChartOptions2] = useState({
  theme: "ag-default-dark",
  data: [
    
    { asset: 'Grade', amount: 31 },
    { asset: '', amount: 69 },
    
],
// series: [{ type: 'bar', xKey: 'month', yKey: 'iceCreamSales' }],
series: [{ 
  type: 'pie', 
  angleKey: 'amount', 
  legendItemKey: 'amount', 
  calloutLabelKey: 'asset', 
  innerRadiusRatio: 0.7,
  sectorLabel:{
    formatter:(data)=>{
        return data+"%";
    }
  },
  innerLabels: [
    {
        text: 'Avarage Grade',
        fontWeight: 'bold',
    }
  ],
innerCircle: {
    fill: 'transparent',
},
}],
title:{
  text:'BS in Information System Average Grade'
},
background:{
  fill:'transparent'
}
  // ...
});

const [chartOptions3, setChartOptions3] = useState({
  theme: "ag-default-dark",
  data: [
    
    { asset: 'Grade', amount: 26 },
    { asset: '', amount: 74 },
    
],
// series: [{ type: 'bar', xKey: 'month', yKey: 'iceCreamSales' }],
series: [{ 
  type: 'pie', 
  angleKey: 'amount', 
  legendItemKey: 'amount', 
  calloutLabelKey: 'asset', 
  innerRadiusRatio: 0.7,
  sectorLabel:{
    formatter:(data)=>{
        return data+"%";
    }
  },
  innerLabels: [
    {
        text: 'Avarage Grade',
        fontWeight: 'bold',
    }
  ],
innerCircle: {
    fill: 'transparent',
},
}],
title:{
  text:'BS in Entertainment and Multimedia Communication Average Grade'
},
background:{
  fill:'transparent'
}
  // ...
});

const [chartOptions4, setChartOptions4] = useState({
  theme: "ag-default-dark",
  data: [
    {
      quarter: "Module 1",
      cs: 43,
      is: 35,
      emc: 26,
  },
  {
      quarter: "Module 2",
      cs: 43,
      is: 35,
      emc: 26,
  },
  {
      quarter: "Module 3",
      cs: 43,
      is: 35,
      emc: 26,
  },
  {
      quarter: "Module 4",
      cs: 43,
      is: 35,
      emc: 26,
  },
    
],
// series: [{ type: 'bar', xKey: 'month', yKey: 'iceCreamSales' }],
series: [
  {
    type: "bar",
    xKey: "quarter",
    yKey: "cs",
    yName: "Computer Science",
  },
  {
    type: "bar",
    xKey: "quarter",
    yKey: "is",
    yName: "Information Systems",
  },
  {
    type: "bar",
    xKey: "quarter",
    yKey: "emc",
    yName: "Entertainment and Multimedia Communication",
  },
],
title:{
  text:'Avegage Grade of Courses '
},
background:{
  fill:'transparent'
}
  // ...
});

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
       
      </Box>
      <Box
          gridColumn="span 12"
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
                textAlign: "center",
                top: 0,
                left: 0,
                width: "100%",
                display: index === currentAnnouncementIndex ? 'block' : 'none',
                transition: "opacity 0.5s ease-in-out",
              }}
            >
              {announcement}
            </Typography>
          ))}
        </Box>
      {/* <Grid p="1.5rem 0rem">
        <AgChartsReact options={chartOptions} style={{'border-radius':'30px'}} />
        <AgChartsReact color="default" options={chartOptions2}  />
        <AgChartsReact color="default" options={chartOptions3}  />
      </Grid> */}
      <Grid container spacing={3}>
        <Grid item xs={4} >
            <AgChartsReact options={chartOptions} />
        </Grid>
        <Grid item xs={4}>
            <AgChartsReact color="default" options={chartOptions2}  />
        </Grid>
        <Grid item xs={4}>
            <AgChartsReact color="default" options={chartOptions3}  />
        </Grid>
    </Grid>
    <Grid container spacing={1} p="1.5rem 0rem">
        <Grid item xs={12}>
            <AgChartsReact options={chartOptions4} />
        </Grid>
       
    </Grid>
    </Box>
  );
};



export default Dashboard;
