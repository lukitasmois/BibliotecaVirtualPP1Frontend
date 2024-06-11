import { Link } from "react-router-dom";


const Inventario = () => {
    return(
        <div>
            <h1>INVENTARIO</h1>
            <li>
                <Link to="/aniadirLibro" className="nav-link">Añadir Libro</Link>
            </li>
            <li>
                <Link to="/descartarLibro" className="nav-link">Descartar Libro</Link>
            </li>
        </div>
    )
}

export default Inventario;