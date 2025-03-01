import React, { useState, useEffect } from "react";
import Header from "components/Header";
import {csvReader} from '../../function/csvReader'
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
  Grid,
  Button,
} from "@mui/material";



const { toJson, getModules } = csvReader();

const  professorData = toJson();





const InstructorsTable = () => {
  
const [filteredList, setFilteredList] = new useState(professorData);

const filterBySearch = (event) => {
  // Access input value
  const query = event.target.value;
  // Create copy of item list
  var updatedList = [...professorData];
  // Include all elements which includes the search query
  updatedList = updatedList.filter((item) => {
    return (item.FIRST_NAME +" "+item.LAST_NAME).toLowerCase().indexOf(query.toLowerCase()) !== -1;
  });
  // Trigger render with updated values
  setFilteredList(updatedList);
};
 
  return (
    <Box m="1.5rem 2.5rem">
      <Grid container spacing={2} >
          <Grid item xs={6}>
            <Typography variant="h4">List of Instructors</Typography>
          
          </Grid>
          <Grid item xs={6}>
            <input id="search-box" placeholder="Search By Name" onChange={filterBySearch} />
          </Grid>
      </Grid>
      
     
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
              {filteredList.map((professor, index) => (
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
