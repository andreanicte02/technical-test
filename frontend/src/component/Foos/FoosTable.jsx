import React from 'react';
import { Paper} from '@material-ui/core'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';




const FoosTable = (props) => {

    console.log(props.foo);


    return (
      <div>

          <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <TableHead>
                      <TableRow>

                          <TableCell align="right">nombre</TableCell>
                          <TableCell align="right">ubicacion</TableCell>
                          <TableCell align="right">telefono</TableCell>
                          <TableCell align="right">action</TableCell>
                      </TableRow>
                  </TableHead>
                  <TableBody>
                      {props.foo.map((row) => (
                          <TableRow
                              key={row.id}
                              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                          >
                              <TableCell align="right">{row.nombre}</TableCell>
                              <TableCell align="right">{row.ubicacion}</TableCell>
                              <TableCell align="right">{row.telefono}</TableCell>
                              <TableCell align="right">
                                  <Button
                                      variant="outlined"
                                      startIcon={<DeleteIcon />}
                                      onClick={()=>props.delete(row.id)}
                                  >
                                      Delete
                                  </Button>
                                  <Button
                                      variant="contained" endIcon={<EditIcon />}
                                      onClick={()=>props.editRow(row)}
                                  >
                                      Edit
                                  </Button>
                              </TableCell>
                          </TableRow>
                      ))}
                  </TableBody>
              </Table>
          </TableContainer>
      </div>
    );

}

export default FoosTable;