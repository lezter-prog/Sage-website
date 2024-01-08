import React from "react";
import {
  Box,
  Typography,
  Paper,
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  CircularProgress,
} from "@mui/material";

const professorData = [
  {
    name: "John Smith",
    subjects: [
      { subject: "Artificial Intelligence", submitted: true },
      { subject: "Machine Learning", submitted: false },
      { subject: "Data Science", submitted: true },
    ],
  },
  {
    name: "Emma White",
    subjects: [
      { subject: "Data Structures", submitted: true },
      { subject: "Algorithms", submitted: true },
      { subject: "Database Management", submitted: false },
    ],
  },
  // Add more professor data
];

const ProfessorSubmissionPage = () => {
  return (
    <Box m="1.5rem 2.5rem">
      <Typography variant="h4">Professor Submission Status</Typography>
      <Paper elevation={3} style={{ padding: "20px", marginBottom: "20px" }}>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Professor Name</TableCell>
                <TableCell>Subjects</TableCell>
                <TableCell>Submission Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {professorData.map((professor, index) => (
                <TableRow key={index}>
                  <TableCell>{professor.name}</TableCell>
                  <TableCell>
                    <ul>
                      {professor.subjects.map((subject, subIndex) => (
                        <li key={subIndex}>
                          {subject.subject}
                          {subject.submitted ? (
                            <span style={{ color: "green", marginLeft: "10px" }}>
                              Submitted
                            </span>
                          ) : (
                            <span style={{ color: "red", marginLeft: "10px" }}>
                              Not Submitted
                            </span>
                          )}
                        </li>
                      ))}
                    </ul>
                  </TableCell>
                  <TableCell>
                    {professor.subjects.every((subject) => subject.submitted) ? (
                      <CircularProgress style={{ color: "green" }} />
                    ) : (
                      <CircularProgress style={{ color: "red" }} />
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Box>
  );
};

export default ProfessorSubmissionPage;
