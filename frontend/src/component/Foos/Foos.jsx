import React, {useState} from 'react';
import FoosTable from "./FoosTable";
import {Container, Paper} from "@mui/material";
import {v4 as uuidv4} from 'uuid';
import useStyles from "../../constants/useStyles";
import AddFoo from "./AddFoo";
const Foos = () => {
    const classes = useStyles()

    const data = [

        {id:1,name:'Retalhuleu',ubicacion:'zona 1',telefono:'12323123'},
        {id:2,name:'Retalhuleu',ubicacion:'zona 1',telefono:'12323123'},
        {id:3,name:'Retalhuleu',ubicacion:'zona 1',telefono:'12323123'},
        {id:4,name:'Retalhuleu',ubicacion:'zona 1',telefono:'12323123'}

    ]

    const [foos, setFoos]= useState(data);

    const addFoo = (foo) => {

        foo.id=uuidv4();
        setFoos([...foo, foo])
    }

    return (
        <Container elevation={5}  component={Paper}  maxWidth="md" >

            <AddFoo/>
            <FoosTable foo={foos}/>

        </Container>
    );

}

export default Foos;