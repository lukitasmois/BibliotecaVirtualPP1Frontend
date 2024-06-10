import { useState, useEffect } from "react";
import ListadoDeLibros from "./listadoDeLibros";

const BuscarLibros = () => {
    const [libros, setLibros] = useState([]);

    const buscar = (event) => {
        event.preventDefault()
        const busqueda ={ 
            titulo: event.target.titulo.value,
            autor: event.target.autor.value,
            genero: event.target.genero.value

        }
        const requestOptions ={
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({busqueda})
        }

        fetch("http://localhost:4000/libros/buscar", requestOptions)
        .then(response =>{
            if(!response.ok){
                throw new Error("Error en la llamada")
            }
            return response.text()
        })
        .then(data =>{
            setLibros(JSON.parse(data))
            console.log("respuesta del servidor", data)
        })
    }

    return(
        <ul>
            <h1>Buscar Libros</h1>
            <form onSubmit={buscar}>
                <input type="text" id="titulo" placeholder="Titulo"/>
                <input type="text" id="autor" placeholder="Autor"/>
                <input type="text" id="genero" placeholder="Genero"/>
                <button type="submit">Buscar</button>
                <ListadoDeLibros Libros={libros}/>
            </form>
        </ul>
    )
}

export default BuscarLibros;