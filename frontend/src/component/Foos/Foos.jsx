import React, {useState} from 'react';
import FoosTable from "./FoosTable";
import {Container, Paper} from "@mui/material";
import {v4 as uuidv4} from 'uuid';
import AddFoo from "./AddFoo";
import EditFoo from "./EditFoo";
import useStyles from "../../constants/useStyles";
import {goo, create} from "../../constants/crudFoo";

const Foos = () => {

    const classes = useStyles()

    const [foos, setFoos] = useState([]);
    const [isEdit, setIsEdit] = useState(false);
    const [flag, setiIsFlag] = useState(true);

    function hello(){

        if(!flag) return;

        goo(setFoos);
        setiIsFlag(false);
        console.log('hola');
    }


    const addFoo = (data) => {

        console.log(data);
        create(data);
        setiIsFlag(true);

    }

    //si es solo un argumento no se necesitan parametros
    const deleteFoo = id => {
        const auxArray = foos.filter(
            foo => foo.id !== id
        );

        setFoos(auxArray)
    }

    const [currentFoo, setCurrentFoo] = useState({
        id: null, nombre: null, ubicacion: null, telefono: null
    })

    const editRow = foo => {

        setIsEdit(true);

        setCurrentFoo({
            id: foo.id,
            nombre: foo.nombre,
            ubicacion: foo.ubicacion,
            telefono: foo.telefono
        })

    }

    const updateFoo = (id, foo) => {
        console.log(id);
        console.log(foo);
        setIsEdit(false);
        foo.id = id;
        setFoos(
            foos.map(elemet => (elemet.id === id ? foo : elemet))
        )
    }


    hello();

    return (
        <div className={classes.div} >
            <Container elevation={5} component={Paper} maxWidth="md" className={classes.container2}>

                {
                    isEdit ?
                        (<EditFoo currentFoo={currentFoo} updateFoo={updateFoo}/>) :
                        (<AddFoo addFoo={addFoo}/>)

                }
                <FoosTable
                    delete={deleteFoo}
                    foo={foos}
                    editRow={editRow}
                />

            </Container>
        </div>
    );

}

export default Foos;