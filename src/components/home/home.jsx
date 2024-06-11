import { Link } from "react-router-dom";

const Home = () =>{
    return(
        <div>
            <h1>Bienvenido</h1>
            <li>
                <Link to="/login" className="nav-link">Login</Link>
            </li>
            <li>
                <Link to="/register" className="nav-link">Register</Link>
            </li>
            <li>
                <Link to="/libros" className="nav-link">Libros</Link>
            </li>
            <li>
                <Link to="/buscarLibros" className="nav-link">Buscar Libros</Link>
            </li>
            <li>
                <Link to="/inventario" className="nav-link">Inventario</Link>
            </li>
        </div>
    )
}

export default Home;