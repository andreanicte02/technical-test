import React, {useState} from 'react';
import useStyles from "../../constants/useStyles";
import {Button, TextField} from "@mui/material";
import {v4 as uuidv4} from 'uuid';

const AddFoo = (props) =>{

    const classes = useStyles()
    const[body, setBody]=useState({nombre:'', ubicacion:'',telefono:''})

    const handleChange =e =>{
        setBody({
            ...body,
            [e.target.name]: e.target.value
        })

    }

    const onSubmit = () => {
        const data = {

            nombre:body.nombre,
            telefono:body.telefono,
            ubicacion:body.ubicacion
        }

        props.addFoo(data);
    }

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
                onClick={()=>onSubmit()}
            >

                Registrar

            </Button>
        </form>
    );


}

export default AddFoo;