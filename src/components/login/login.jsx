const Login = () => {
    const login = (e) => {
        e.preventDefault();
        console.log("Login");
    }

    return(
        <div>
            <h1>Login</h1>
            <form onSubmit={login}>
                <input type="text" placeholder="Usuario" />
                <input type="password" placeholder="Contraseña" />
                <button type="submit">Ingresar</button>
            </form>
        </div>
    )
    
}

export default Login;