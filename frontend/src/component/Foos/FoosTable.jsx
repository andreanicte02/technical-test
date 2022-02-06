import React from 'react';
import useStyles from "../../constants/useStyles";
import {Grid, Container, Paper, Button, CssBaseline} from '@material-ui/core'
import CreateIcon from '@mui/icons-material/Create';
import Divider from '@mui/material/Divider';
import {Table, TableContainer, TableHead, TableRow, TableCell} from "@mui/material";




const FoosTable = () => {
    const classes = useStyles()

    return (
        <Grid container component='main' className={classes.root}>
            <CssBaseline/>
            <Container component={Paper} elevation={5} maxWidth='md' className={classes.container}>

                <Divider orientation="horizontal" flexItem>
                    .
                </Divider>

                <CreateIcon/>

                <Divider orientation="horizontal" flexItem/>
                <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                    <th>
                        <h4>name</h4>
                    </th>
                    <th>
                       <h4>ubicacion</h4>

                    </th>
                    <th>
                        <h4 >telefono</h4>
                    </th>
                    <th>
                        <h4 >action</h4>

                    </th>
                    </TableHead>
                    <tbody>
                    <td>
                        name
                    </td>
                    <td>
                        ubicacion
                    </td>
                    <td>
                        teleofono
                    </td>
                    <td>
                        <Button

                            className={classes.button}
                            variant='contained'
                            color = 'primary'
                        >
                                Edit
                            </Button>
                        <Button

                            className={classes.button}
                            variant='contained'
                            color = 'secondary'
                        >Delete</Button>
                    </td>

                    </tbody>
                </Table>
                </TableContainer>
            </Container>
        </Grid>
    );

}

export default FoosTable;