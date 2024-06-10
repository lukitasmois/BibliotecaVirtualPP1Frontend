import React from 'react';
import Libro from "./libro";

const ListadoDeLibros = (props) => {
    return(
        <ul>
            {props.Libros.map((libro) => {
                return(
                    <li>
                        <Libro 
                            nombre = {libro.nombre}
                        />
                    </li>
                )

            })}
        </ul>
    )

}

export default ListadoDeLibros;