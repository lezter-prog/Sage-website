import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
} from "@mui/material";

const StudentActivityPage = () => {
  // Simulated data for student activity
  const studentActivityData = [
    {
      studentName: "Alice Johnson",
      section: "A222",
      subject: "Artificial Intelligence",
      content: "AI Lecture Slides",
      timeSpent: "30 minutes",
    },
    {
      studentName: "Bob Davis",
      section: "A422",
      subject: "Capstone Project 1",
      content: "Project Proposal",
      timeSpent: "45 minutes",
    },
    {
      studentName: "Charlie Brown",
      section: "A222",
      subject: "Evaluation of Business",
      content: "Case Study Analysis",
      timeSpent: "20 minutes",
    },
    // Add 10 more data points
    {
      studentName: "David Lee",
      section: "A422",
      subject: "Artificial Intelligence",
      content: "AI Research Paper",
      timeSpent: "40 minutes",
    },
    {
      studentName: "Eve Smith",
      section: "A222",
      subject: "Evaluation of Business",
      content: "Business Report",
      timeSpent: "25 minutes",
    },
    {
      studentName: "Frank Johnson",
      section: "A222",
      subject: "Capstone Project 1",
      content: "Project Presentation",
      timeSpent: "35 minutes",
    },
    {
      studentName: "Grace Taylor",
      section: "A422",
      subject: "Artificial Intelligence",
      content: "AI Quiz",
      timeSpent: "15 minutes",
    },
    {
      studentName: "Hannah Martin",
      section: "A222",
      subject: "Artificial Intelligence",
      content: "AI Lab Exercise",
      timeSpent: "20 minutes",
    },
    {
      studentName: "Ian Brown",
      section: "A422",
      subject: "Capstone Project 1",
      content: "Project Meeting",
      timeSpent: "10 minutes",
    },
    {
      studentName: "Jack Davis",
      section: "A222",
      subject: "Evaluation of Business",
      content: "Business Presentation",
      timeSpent: "30 minutes",
    },
  ];

  // State to store the student activity data
  const [activityData, setActivityData] = useState([]);

  useEffect(() => {
    // In a real application, you would fetch student activity data from an API and update the state.
    // For now, we're using the simulated data.
    setActivityData(studentActivityData);
  }, []);

  return (
    <Box m="1.5rem 2.5rem">
      <Typography variant="h4">Student Activity</Typography>
      {/* Section for A222 students */}
      <Typography variant="h6">Section A222</Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Student Name</TableCell>
              <TableCell>Subject</TableCell>
              <TableCell>Content Accessed</TableCell>
              <TableCell>Time Spent</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {activityData
              .filter((activity) => activity.section === "A222")
              .map((activity, index) => (
                <TableRow key={index}>
                  <TableCell>{activity.studentName}</TableCell>
                  <TableCell>{activity.subject}</TableCell>
                  <TableCell>{activity.content}</TableCell>
                  <TableCell>{activity.timeSpent}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      {/* Section for A422 students */}
      <Typography variant="h6">Section A422</Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Student Name</TableCell>
              <TableCell>Subject</TableCell>
              <TableCell>Content Accessed</TableCell>
              <TableCell>Time Spent</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {activityData
              .filter((activity) => activity.section === "A422")
              .map((activity, index) => (
                <TableRow key={index}>
                  <TableCell>{activity.studentName}</TableCell>
                  <TableCell>{activity.subject}</TableCell>
                  <TableCell>{activity.content}</TableCell>
                  <TableCell>{activity.timeSpent}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default StudentActivityPage;
