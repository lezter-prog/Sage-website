import React from "react";
import {csvReader} from '../function/csvReader'
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



const { toJson, getModules } = csvReader();
var script = document.currentScript;
var base_url = window.location.origin + '/' + window.location.pathname.split ('/') [1] + '/';

const professorData = toJson(base_url+"/data/Faculty.csv");

const InstructorsUssageTable = () => {
  return (
    <Box m="1.5rem 2.5rem">
      <Typography variant="h4">List of Instructors</Typography>
      <Paper elevation={3} style={{ padding: "20px", marginBottom: "20px" }}>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Courses</TableCell>
                <TableCell></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {professorData.map((professor, index) => (
                <TableRow key={index}>
                  <TableCell>{professor.FIRST_NAME +" "+professor.LAST_NAME}</TableCell>
                  <TableCell>
                    <ul>
                        {
                            professor.NAME
                        }
                    </ul>
                  </TableCell>
                  <TableCell>
                        <Button color="success" type="outlined" key={index} onClick={() => courseContent(professor.PERSON_ID,professor.COURSE_ID)}>
                            Course Content
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

function courseContent(instructor,courseId){
   
    window.location.href = "/course-content?instructor="+instructor+"&course="+courseId;
  }

export default InstructorsUssageTable;
