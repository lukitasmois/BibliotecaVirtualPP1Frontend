import React, { useState, useEffect } from "react";
import ListadoDeLibros from "./listadoDeLibros";

const Libros = () => {
    const [libros, setLibros] = useState([]);

    useEffect(() => {
        fetch("http://localhost:4000/libros/")
          .then((response) => response.json())
          .then((data) => {
            setLibros(data);
          })
          .catch((error) => console.log("Error en la carga", error));
      }, []);

    return (
        <div>
            <h1>Libros</h1>
            <ListadoDeLibros Libros={libros}/>
        </div>
    )

}

export default Libros;