import React, {useState} from 'react';
import FoosTable from "./FoosTable";
import {Container} from "@mui/material";
import {v4 as uuidv4} from 'uuid';
const Foos = () => {

    const data = [

        {id:1,name:'Retalhuleu',ubicacion:'zona 1',telefono:'12323123'},
        {id:2,name:'Retalhuleu',ubicacion:'zona 1',telefono:'12323123'},
        {id:3,name:'Retalhuleu',ubicacion:'zona 1',telefono:'12323123'}

    ]

    const [info, setInfo]= useState(data);

    return (
        <Container  maxWidth="xl">


            <FoosTable info={info}/>


        </Container>
    );

}

export default Foos;