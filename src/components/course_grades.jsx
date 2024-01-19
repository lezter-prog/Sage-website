import React from "react";
import {csvReader} from '../function/csvReader';
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



const searchParams = new URLSearchParams(window.location.search);
const { toJson, getModules,getStudentsByCourse, getStudentById, getStudentGrade, getCourseByCourseID } = csvReader();
var script = document.currentScript;
var base_url = window.location.origin + '/' + window.location.pathname.split ('/') [1] + '/';

const students = getStudentsByCourse(searchParams.get('course'));
console.log(students)



const StudentGradesTable = () => {
    
  return (
    <Box m="1.5rem 2.5rem">
      <Typography variant="h4">{getCourseByCourseID(searchParams.get('course'))} Grades </Typography>
      <Paper elevation={3} style={{ padding: "20px", marginBottom: "20px" }}>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Student Name</TableCell>
                <TableCell>Grades</TableCell>
                <TableCell></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {students.map((student, index) => (
                <TableRow key={index}>
                  <TableCell>{getStudentById(student.PERSON_ID).map(st=>st.FIRST_NAME+" "+st.LAST_NAME)}</TableCell>
                  <TableCell>
                        {getStudentGrade(student.ID)}
                  </TableCell>
                  <TableCell>
                       
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

function sayHello(instructor){
    console.log(instructor);
    var course = getModules(instructor)[0];

    window.location.href = "/view/grades?instructor="+instructor+"&course="+course.ID;
  }

export default StudentGradesTable;
