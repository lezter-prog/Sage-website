import React, { useState, useEffect } from 'react';
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  InputAdornment,
  TablePagination,
} from '@mui/material';

const PeopleTable = ({ data }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredData, setFilteredData] = useState(data);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(50);

  useEffect(() => {
    // Filter the data based on the search term
    const filtered = data.filter(
      (person) =>
        person.LAST_NAME.toLowerCase().includes(searchTerm.toLowerCase()) ||
        person.FIRST_NAME.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredData(filtered);
    setPage(0); // Reset page when the data changes
  }, [searchTerm, data]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <div>
      <TextField
        label="Search"
        variant="outlined"
        fullWidth
        onChange={(e) => setSearchTerm(e.target.value)}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">🔍</InputAdornment>
          ),
        }}
        sx={{ marginBottom: '1rem' }}
      />

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Last Name</TableCell>
              <TableCell>First Name</TableCell>
              <TableCell>Person ID</TableCell>
              <TableCell>Month</TableCell>
              <TableCell>Duration Minutes</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredData
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((person, index) => (
                <TableRow key={index}>
                  <TableCell>{person.LAST_NAME}</TableCell>
                  <TableCell>{person.FIRST_NAME}</TableCell>
                  <TableCell>{person.PERSON_ID}</TableCell>
                  <TableCell>{person.MONTH}</TableCell>
                  <TableCell>{person.DURATION_MINUTES}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
        <TablePagination
          rowsPerPageOptions={[10, 25, 50]}
          component="div"
          count={filteredData.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </TableContainer>
    </div>
  );
};

export default PeopleTable;
