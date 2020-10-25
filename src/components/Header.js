import React,{Fragment,useState} from 'react';
import {Link,Redirect} from 'react-router-dom';
const Header = ({userSesion,setUserSesion}) => {
    // declaracion de state

    const [redirect,SetRedirect]= useState(false);

    // funcion para cerrar sesion
    const cerrarSesion=()=>{
        setUserSesion({
            id:0,
            nombre:''
        });
        localStorage.setItem('id',0);
        SetRedirect(true);
    }

    if(redirect){
        return <Redirect to="/login"/>
    }
    return ( 
        <Fragment>
           
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
               
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                    <li className="nav-item ">
                        <Link className="nav-link" to="/">Inicio </Link>
                    </li>
                    {parseInt(localStorage.getItem('id'))!==0 && userSesion.tipoUsuario!==1?
                    (<li className="nav-item">
                        <Link className="nav-link" to="/misreservas">Mis Reservas</Link>
                    </li>):null}
                    {parseInt(localStorage.getItem('id'))===0?
                    (<li className="nav-item">
                        <Link className="nav-link" to="/login">Ingresar</Link>
                    </li>):null}
                    {parseInt(localStorage.getItem('id'))===0?
                    (<li className="nav-item">
                        <Link className="nav-link " to="/registrar" >Registrar</Link>
                    </li>):null}

                    {parseInt(localStorage.getItem('id'))!==0 && userSesion.tipoUsuario===1?
                    (<li className="nav-item">
                        <Link className="nav-link " to="/peliculas" >Peliculas</Link>
                    </li>):null}

                    {parseInt(localStorage.getItem('id'))!==0 && userSesion.tipoUsuario===1?
                    (<li className="nav-item">
                        <Link className="nav-link " to="/usuarios" >Usuarios</Link>
                    </li>):null}

                    {parseInt(localStorage.getItem('id'))!==0 && userSesion.tipoUsuario===1?
                    (<li className="nav-item">
                        <Link className="nav-link " to="/reservas" >Reservas</Link>
                    </li>):null}

                    {parseInt(localStorage.getItem('id'))!==0?
                    (<li className="nav-item">
                        <a className="nav-link" href="" onClick={cerrarSesion} >Cerrar Sesion</a>
                    </li>):null}
                    </ul>
                </div>
                </nav>
               
        </Fragment>
     );
}
 
export default Header;