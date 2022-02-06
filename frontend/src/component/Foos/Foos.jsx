import React, {useState} from 'react';
import FoosTable from "./FoosTable";
import {Container, Paper} from "@mui/material";
import {v4 as uuidv4} from 'uuid';
import AddFoo from "./AddFoo";
import EditFoo from "./EditFoo";
const Foos = () => {

    const data = [

        {id:uuidv4(),nombre:'Retalhuleu',ubicacion:'zona 1',telefono:'12323123'},
        {id:uuidv4(),nombre:'Retalhuleu',ubicacion:'zona 1',telefono:'12323123'},
        {id:uuidv4(),nombre:'Retalhuleu',ubicacion:'zona 1',telefono:'12323123'},
        {id:uuidv4(),nombre:'Retalhuleu',ubicacion:'zona 1',telefono:'12323123'}

    ]

    const [foos, setFoos]= useState(data);
    const [isEdit, setIsEdit] =useState(false);

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

    const [currentFoo, setCurrentFoo]= useState({
        id:null,nombre:null,ubicacion:null,telefono:null
    })

    const editRow=foo =>{

        setIsEdit(true);

        setCurrentFoo( {
            id:foo.id,
            nombre:foo.nombre,
            ubicacion:foo.ubicacion,
            telefono:foo.telefono
        })

    }

    const updateFoo = (id,foo) =>{
        console.log(id);
        console.log(foo);
        setIsEdit(false);
        foo.id=id;
        setFoos(
            foos.map(elemet => (elemet.id=== id ? foo : elemet))
        )
    }

    return (
        <Container elevation={5}  component={Paper}  maxWidth="md" >

            {
                isEdit ?
                    (<EditFoo currentFoo = {currentFoo} updateFoo = {updateFoo}/>):
                    (<AddFoo addFoo={addFoo}/>)

            }
            <FoosTable
                delete={deleteFoo}
                foo={foos}
                editRow = {editRow}
            />

        </Container>
    );

}

export default Foos;