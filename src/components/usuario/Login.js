import React,{useState} from 'react';
import {Redirect} from 'react-router-dom';
import Error from '../Error';
import {postData} from '../../Servicios';

const Login = ({setUserSesion}) => {

    //declarcion de states
    const [datos,setDatos]= useState({
        email:'',
        pass:''
    });
    const [redirect,SetRedirect]= useState(false);
    const [error,setError]= useState(false);

    const {email,pass} = datos;

    // funcion para obtener los datos del form
    const ObtenerInformacion= e=>{
        //actualizar el state
        setDatos({
            ...datos,
            [e.target.name]: e.target.value
        })
    }
   
    // funcion para enviar datos a back
    const enviar= e=>{
            e.preventDefault();

            //validacion
            if(email.trim()==='' || pass.trim()===''){
                setError(true);
                return;
            }
            setError(false);

            // enviar

            postData('login/', datos)
            .then(res => {
                if(res===false){
                    setError(true);
                }else{
                    setUserSesion({
                        id:res.id,
                        nombre:res.nombre,
                        tipoUsuario:res.tipoUsuario
                    })
                    localStorage.setItem('id',res.id);
                    SetRedirect(true);
                }
                
            });
        }
    
    
        if(redirect){
            return <Redirect to="/"/>
        }

    return ( 
        <div className="col-xl-4 contenido">
            <h1>Ingrese sus datos</h1>
            {error?<Error mensaje="Datos incorrectos"/>: null}
            <form
                onSubmit={enviar}
            >
            
                <div className="form-group center-block">
                    <label>Email:</label>
                    <input 
                        type="email" 
                        name="email" 
                        className="form-control"
                        value={email}
                        onChange={ObtenerInformacion}
                    />
                </div>
                <div className="form-group center-block">
                    <label>Contraseña:</label>
                    <input 
                        type="Password" 
                        name="pass" 
                        className="form-control"
                        value={pass}
                        onChange={ObtenerInformacion}
                    />
                </div>
                
                <input type="submit" value="Ingresar" className="btn btn-primary btn-block" />

            </form>
        </div>
     );
}
 
export default Login;