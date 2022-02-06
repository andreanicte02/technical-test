import React from 'react';
import useStyles from "../../constants/useStyles";
import {Button, TextField} from "@mui/material";


const AddFoo = () =>{

    const classes = useStyles()

    return(
        <form className={classes.form}>
            <h2>add entity</h2>
            <TextField
                fullWidth
                autoFocus
                color='primary'
                margin='normal'
                variant='outlined'
                label='Nombre'
                name='nombre'
            />
            <TextField
                fullWidth
                autoFocus
                color='primary'
                margin='normal'
                variant='outlined'
                label='Ubicacion'
                name='ubicacion'
            />
            <TextField
                fullWidth
                autoFocus
                color='primary'
                margin='normal'
                variant='outlined'
                label='Telefono'
                name='telefono'
            />
            <Button
                fullWidth
                variant='contained'
                color='primary'
                className={classes.button}
            >

                Registrar

            </Button>
        </form>
    );


}

export default AddFoo;