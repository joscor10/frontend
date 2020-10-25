import React,{useState} from 'react';
import {Redirect} from 'react-router-dom';
import Error from '../Error';
import {postData} from '../../Servicios';

const Registrar = () => {

    //declaracion de states
    const [usuario,setUsuario]= useState({
        rut:'',
        nombre:'',
        email:'',
        pass:'',
        direccion:'',
        telefono:0
    });  
    const [redirect,SetRedirect]= useState(false);
    const [error,setError]= useState(false);

    const {rut,nombre,email,pass,direccion,telefono} = usuario;

    // funcion para obtener datos del form
    const obtenerInformacion = e=>{
        setUsuario({
            ...usuario,
            [e.target.name]:e.target.value

        })
    };

    // funcion para enviar datos a back
    const enviar= e=>{
        e.preventDefault();

        //validacion
        if(rut.trim()==='' || nombre.trim()==='' || email.trim()==='' || pass.trim()==='' || direccion.trim()==='' ||telefono===0){
            setError(true);
            return;
        }
        setError(false);

        //enviar
        postData('usuarios/', usuario)
        .then(res => {
            SetRedirect(true);
        });
    }


    if(redirect){
        return <Redirect to="/login"/>
    }
    return ( 
        
       <div className="col-xl-6  contenido">
           <h1>Ingrese sus datos</h1>
           {error?<Error mensaje="Todos los campos son obligatorios"/>: null}
           <form
                  onSubmit={enviar}
           >
               <div className="form-group center-block">
                   <label>Rut:</label>
                   <input 
                        type="text" 
                        name="rut" 
                        className="form-control"
                        value={rut}
                        onChange={obtenerInformacion}
                    />                  
                    
               </div>
               <div className="form-group center-block">
                   <label>Nombre:</label>
                   <input 
                        type="text" 
                        name="nombre" 
                        className="form-control"
                        value={nombre}
                        onChange={obtenerInformacion}
                    />
               </div>
               <div className="form-group center-block">
                   <label>Email:</label>
                   <input 
                        type="Email" 
                        name="email" 
                        className="form-control"
                        value={email}
                        onChange={obtenerInformacion}
                    />
               </div>
               <div className="form-group center-block">
                   <label>Contraseña:</label>
                   <input 
                        type="Password" 
                        name="pass" 
                        className="form-control"
                        value={pass}
                        onChange={obtenerInformacion}
                        />
               </div>
               <div className="form-group center-block">
                   <label>Direccion:</label>
                   <input 
                        type="text" 
                        name="direccion"                        
                        className="form-control"
                        value={direccion}
                        onChange={obtenerInformacion}
                        />
               </div>
               <div className="form-group center-block">
                   <label>Telefono:</label>
                   <input 
                        type="number" 
                        name="telefono" 
                        className="form-control"
                        value={telefono}
                        onChange={obtenerInformacion}
                        />
               </div>

                <input type="submit" value="Registrar" className="btn btn-primary btn-block" />

           </form>
       </div>
     );
}
 
export default Registrar;