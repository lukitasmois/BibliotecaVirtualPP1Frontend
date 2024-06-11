import React, {useState } from 'react';

const AniadirLibro = () => {
    const [cantidadCopias, setCantidad] = useState(1)
    const [libro, setLibro] = useState([]);
    
    const cambiarCopias = (event) => {
        const numero = parseInt(event.target.value)
        if(numero > 0){
            setCantidad(numero)
        }
    }

    const crearLibro = (event) => {
        event.preventDefault()

        const isbn = event.target.isbn.value
        const titulo = event.target.titulo.value
        const autor = event.target.autor.value
        const genero = event.target.genero.value
        const cantCopias = event.target.cantCopias.value
        const tipo = event.target.tipo.value

        if(tipo === "FISICO"){
            const libroFisico = {isbn, titulo, autor, genero, cantCopias, tipo: "FISICO"}
            setLibro(libroFisico);
        }else{
            const libroDigital = {isbn,titulo,autor,genero,cantCopias: 0,tipo: "DIGITAL"}
            setLibro(libroDigital);
        }

        const requestOptions ={
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({libro})
        }
        fetch("http://localhost:4000/libros/aniadirLibro", requestOptions)
        .then(response =>{
            if(!response.ok){
                console.log(response);
                return response.text().then(error => {
                    console.log("dad");
                    alert(error)
                })
            }
            return alert("Libro añadido correctamente")
        })
        .then(data =>{
            console.log("respuesta del servidor", data)
        })
    }



    return(
        <div>
            <h1>AÑADIR LIBRO</h1>
            <form onSubmit={crearLibro}>
                <input type="number" id="isbn" placeholder="ISBN"/><br />
                <input type="text" id="titulo" placeholder="Titulo"/><br />
                <input type="text" id="autor" placeholder="Autor"/><br />
                <input type="text" id="genero" placeholder="Genero"/><br />
                <input type="number" 
                id="cantCopias" 
                placeholder="Cantidad de copias" 
                value={cantidadCopias} 
                onChange={cambiarCopias}
                /> <text>(En caso de ser un libro digital este campo no es requerido)</text><br />
                <select  id="tipo">
                    <option value="">Seleccione el Tipo</option>
                    <option value="FISICO">FISICO</option>
                    <option value="DIGITAL">DIGITAL</option>
                </select>
                <button type="submit">Buscar</button>
                
            </form>
        </div>
    )
}

export default AniadirLibro;