import React from "react";
import {noInstrutorCourse} from '../function/noInstructor'
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
  Button,
} from "@mui/material";



const { getCourseWithoutInstructor } = noInstrutorCourse();
var script = document.currentScript;
var base_url = window.location.origin + '/' + window.location.pathname.split ('/') [1] + '/';

const courseWithoutInstructor = getCourseWithoutInstructor();

const CourseWithoutInstructor = () => {
  return (
    <Box m="1.5rem 2.5rem">
      <Typography variant="h4">List of Courses Without Instructor</Typography>
      <Paper elevation={3} style={{ padding: "20px", marginBottom: "20px" }}>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow >
                <TableCell style={{ 'font-weight':'bold' }}>Course Name</TableCell>
                <TableCell style={{ 'font-weight':'bold' }}>Description</TableCell>
                <TableCell style={{ 'font-weight':'bold' }}>Course Number</TableCell>
                <TableCell></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {courseWithoutInstructor.map((course, index) => (
                <TableRow key={index}>
                  <TableCell>{course.NAME}</TableCell>
                  <TableCell>
                            {course.DESCRIPTION}
                  </TableCell>
                  <TableCell>
                        {course.COURSE_NUMBER}
                  </TableCell>
                  <TableCell>
                        <Button color="success" type="outlined" key={index} onClick={() => sayHello()}>
                           Add Instructor
                            </Button>
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

function sayHello(){
    alert('This Feature is not yet available')
  }

export default CourseWithoutInstructor;
