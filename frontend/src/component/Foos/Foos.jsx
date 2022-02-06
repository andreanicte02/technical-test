import React, {useState} from 'react';
import FoosTable from "./FoosTable";
import {Container, Paper} from "@mui/material";
import {v4 as uuidv4} from 'uuid';
import useStyles from "../../constants/useStyles";
import AddFoo from "./AddFoo";
const Foos = () => {

    const classes = useStyles()

    const data = [

        {id:uuidv4(),nombre:'Retalhuleu',ubicacion:'zona 1',telefono:'12323123'},
        {id:uuidv4(),nombre:'Retalhuleu',ubicacion:'zona 1',telefono:'12323123'},
        {id:uuidv4(),nombre:'Retalhuleu',ubicacion:'zona 1',telefono:'12323123'},
        {id:uuidv4(),nombre:'Retalhuleu',ubicacion:'zona 1',telefono:'12323123'}

    ]

    const [foos, setFoos]= useState(data);

    const addFoo = (data) => {

        setFoos([
            ...foos,
            data
        ])
    }

    //si es solo un argumento no se necesitan parametros
    const deleteFoo =id=> {
        const auxArray= foos.filter(
            foo=> foo.id !== id
        );

        setFoos(auxArray)
    }

    return (
        <Container elevation={5}  component={Paper}  maxWidth="md" >

            <AddFoo addFoo={addFoo}/>
            <FoosTable delete={deleteFoo} foo={foos}/>

        </Container>
    );

}

export default Foos;