import React from "react";
import {csvReader} from '../function/csvReader';
import { styled } from '@mui/material/styles';
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
  Avatar,
  Stack,
  Grid,
} from "@mui/material";
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';



const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
const searchParams = new URLSearchParams(window.location.search);
const { getModules,getStudentsByCourse, getStudentById, getStudentGrade, getCourseByCourseID, getInstructor } = csvReader();


const students = getStudentsByCourse(searchParams.get('course'));
console.log(students)
const faculty =getInstructor(searchParams.get('instructor'));



const CourseContent = () => {
    
  return (
    <Box m="1.5rem 2.5rem">
      <Typography variant="h4">{getCourseByCourseID(searchParams.get('course'))} </Typography>
      <Paper elevation={3} style={{ padding: "20px", marginBottom: "20px" }}>
      <Grid container spacing={2}>
            <Grid item xs={4} >
                <Item sx={{display:'flex', gap:2}}>
                    <Avatar src="/broken-image.jpg" sx={{ width: 45, height: 45}}/>
                    <div sx={{display:'flex', flexDirection:'column', justifyContent:'center'}}>
                        <Typography variant="h6">
                            {faculty.FIRST_NAME+" "+faculty.LAST_NAME} 
                        </Typography>
                        <Typography variant="h6">
                            Instructor
                        </Typography>
                    </div>
                </Item>
            </Grid>
            <Grid item xs={8}>
                <Item>
                <Typography variant="h4">
                           Course Content
                        </Typography>
                        <hr />
                        <Item>
                        <List
                            sx={{ width: '100%', }}
                            component="nav"
                            aria-labelledby="nested-list-subheader"
                            // subheader={
                            //     <ListSubheader component="div" id="nested-list-subheader">
                            //     Nested List Items
                            //     </ListSubheader>
                            // }
                            >
                            <ListItemButton>
                                <ListItemIcon>
                                <PictureAsPdfIcon />
                                </ListItemIcon>
                                <ListItemText primary="Module1.pdf" />
                            </ListItemButton>
                            <ListItemButton>
                                <ListItemIcon>
                                <PictureAsPdfIcon />
                                </ListItemIcon>
                                <ListItemText primary="Module2.pdf" />
                            </ListItemButton>
                            <ListItemButton >
                                <ListItemIcon>
                                <PictureAsPdfIcon />
                                </ListItemIcon>
                                <ListItemText primary="Module3.pdf" />
                            </ListItemButton>
                            <ListItemButton >
                                <ListItemIcon>
                                <PictureAsPdfIcon />
                                </ListItemIcon>
                                <ListItemText primary="Module4.pdf" />
                            </ListItemButton>
                           
                            </List>
                        </Item>
                </Item>
                
            </Grid>
           
        </Grid>
      </Paper>
    </Box>
  );
};

function sayHello(instructor){
    console.log(instructor);
    var course = getModules(instructor)[0];

    window.location.href = "/view/grades?instructor="+instructor+"&course="+course.ID;
  }

export default CourseContent;
