import React from 'react';

const Libro = (props) => {
    console.log(props)
    return(
        <h1>Titulo {props.nombre}</h1>
    )

}

export default Libro;