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

const  professorData = toJson();




const InstructorsTable = () => {
 
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
                        <Button color="success" type="outlined" key={index} onClick={() => sayHello(professor.PERSON_ID,professor.COURSE_ID)}>
                            View Module Grades
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

function sayHello(instructor,courseId){
    console.log(instructor);
    

    window.location.href = "/view/grades?instructor="+instructor+"&course="+courseId;
  }

export default InstructorsTable;
