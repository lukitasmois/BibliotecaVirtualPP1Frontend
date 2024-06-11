import React from 'react';

const Libro = (props) => {
    console.log(props)
    return(
        <ul>
            <h1>Titulo {props.nombre}</h1>
        </ul>
    )

}

export default Libro;