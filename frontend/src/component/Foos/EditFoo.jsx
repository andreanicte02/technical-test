import React, {useState} from 'react';
import useStyles from "../../constants/useStyles";
import {Button, TextField} from "@mui/material";
import {v4 as uuidv4} from 'uuid';

const EditFoo = (props) =>{

    const classes = useStyles()
    const[body, setBody]=useState({
        nombre:props.currentFoo.nombre,
        ubicacion:props.currentFoo.ubicacion,
        telefono:props.currentFoo.telefono})


    const handleChange =e =>{
        setBody({
            ...body,
            [e.target.name]: e.target.value
        })

    }


    return(
        <form className={classes.form}>
            <h2>edit fiscalia</h2>
            <TextField
                fullWidth
                autoFocus
                color='primary'
                margin='normal'
                variant='outlined'
                label='Nombre'
                name='nombre'
                value = {body.nombre}
                onChange={handleChange}
            />
            <TextField
                fullWidth
                autoFocus
                color='primary'
                margin='normal'
                variant='outlined'
                label='Ubicacion'
                name='ubicacion'
                value = {body.ubicacion}
                onChange={handleChange}
            />
            <TextField
                fullWidth
                autoFocus
                color='primary'
                margin='normal'
                variant='outlined'
                label='Telefono'
                name='telefono'
                value = {body.telefono}
                onChange={handleChange}
            />
            <Button
                fullWidth
                variant='contained'
                color='primary'
                className={classes.button}
                onClick={()=>props.updateFoo(props.currentFoo.id,body)}
            >

                Editar

            </Button>
        </form>
    );


}

export default EditFoo;