import React from "react";
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
  Button,
  Grid,
  useTheme,
} from "@mui/material";

const facilitatorsData = [
  {
    name: "John Smith",
    subject: "Artificial Intelligence",
    section: "A422",
  },
  {
    name: "Emma White",
    subject: "Capstone Project 1",
    section: "A231",
  },
  {
    name: "Sarah Wilson",
    subject: "Evaluation of Business",
    section: "A422",
  },
  {
    name: "Michael Johnson",
    subject: "IT Audit and Controls",
    section: "A231",
  },
  {
    name: "James Brown",
    subject: "IS Management",
    section: "A422",
  },
];

const recentContentData = [
  {
    facilitator: "John Smith",
    subject: "Artificial Intelligence",
    content: "New AI Research Paper",
  },
  {
    facilitator: "Emma White",
    subject: "Capstone Project 1",
    content: "Project Guidelines Updated",
  },
  {
    facilitator: "Sarah Wilson",
    subject: "Evaluation of Business",
    content: "Case Study Material",
  },
  {
    facilitator: "Michael Johnson",
    subject: "IT Audit and Controls",
    content: "Security Audit Checklist",
  },
  {
    facilitator: "James Brown",
    subject: "IS Management",
    content: "Latest Lecture Slides",
  },
];
const FacilitatorsAndContent = () => {
  const theme = useTheme();
  return (
    <Box m="1.5rem 2.5rem">
      <Typography variant="h4">Facilitators</Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Subject</TableCell>
              <TableCell>Section</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {facilitatorsData.map((facilitator, index) => (
              <TableRow key={index}>
                <TableCell>{facilitator.name}</TableCell>
                <TableCell>{facilitator.subject}</TableCell>
                <TableCell>{facilitator.section}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Box mt="20px">
        <Typography variant="h4">Recent Content</Typography>
        <Grid container spacing={2}>
          {recentContentData.map((content, index) => (
            <Grid item xs={12} sm={6} key={index}>
              <Paper elevation={3} style={{ padding: "20px" }}>
                <Typography variant="h6">{content.facilitator}</Typography>
                <Typography variant="subtitle1">
                  Subject: {content.subject}
                </Typography>
                <Typography variant="body1">
                  Recent Content: {content.content}
                </Typography>
                <Button
                  variant="outlined"
                  color="primary"
                  sx={{
                    color: theme.palette.secondary[200],
                    borderColor: "gray",
                    "&:hover": {
                      backgroundColor: "gray",
                      color: "white",
                    },
                  }}
                >
                  View Details
                </Button>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default FacilitatorsAndContent;
