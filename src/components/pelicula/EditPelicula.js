import React,{useState,useEffect} from 'react';
import {Redirect} from 'react-router-dom';
import Error from '../Error';
import {getFilter, putData} from '../../Servicios';

const Editpelicula = (props) => {

    // declaracion de states
    const [pelicula,setPelicula]= useState({
        id:0,
        titulo:'',
        descripcion:'',
        director:'',
        disponible:0,
      
    });  
    const [redirect,SetRedirect]= useState(false);
    const [error,setError]= useState(false);
    const { match: { params } } = props

    // efect para consultar datos
    useEffect(()=>{
       
            getFilter('peliculas/',params.id)
            .then(res=>{
                setPelicula({
                    id:res[0].Id,
                    titulo:res[0].Titulo,
                    descripcion: res[0].Descripcion,
                    director: res[0].Director,
                    disponible: res[0].Disponible
                });
            })
        
     
       
             // eslint-disable-next-line
    },[setPelicula]);

    // funcion para obtener informacion del form
    const obtenerInformacion = e=>{
        setPelicula({
            ...pelicula,
            [e.target.name]:e.target.value

        })
    };

    const {titulo,descripcion,director,disponible}= pelicula;

    // funcion para enviar datos a el back
    const enviar= e=>{
        e.preventDefault();
        //validacion
        if(titulo.trim()==='' || descripcion.trim()==='' || director.trim()==='' || disponible===0){
            setError(true);
            return;
        }

        setError(false);
        
        // envio
        putData('peliculas/',params.id, pelicula)
        .then(res => {
            SetRedirect(true);
        });
    }

    if(redirect){
        return <Redirect to="/peliculas"/>
    }
    return ( 
        <div className="col-xl-6  contenido">
        <h1>Ingrese Información</h1>
        {error?<Error mensaje="Todos los campos son obligatorios"/>: null}
        <form
               onSubmit={enviar}
        >
            <div className="form-group center-block">
                <label>Titulo:</label>
                <input 
                     type="text" 
                     name="titulo" 
                     className="form-control"
                     value={titulo}
                     onChange={obtenerInformacion}
                 />                  
                 
            </div>
            <div className="form-group center-block">
                <label>Descripción:</label>
                <input 
                     type="text" 
                     name="descripcion" 
                     className="form-control"
                     value={descripcion}
                     onChange={obtenerInformacion}
                 />
            </div>
            <div className="form-group center-block">
                <label>Director:</label>
                <input 
                     type="text" 
                     name="director" 
                     className="form-control"
                     value={director}
                     onChange={obtenerInformacion}
                 />
            </div>
            
            <div className="form-group center-block">
                <label>Disponible:</label>
                <input 
                     type="number" 
                     name="disponible" 
                     className="form-control"
                     value={disponible}
                     onChange={obtenerInformacion}
                     />
            </div>

             <input type="submit" value="Guardar" className="btn btn-primary btn-block" />

        </form>
    </div>
     );
}
 
export default Editpelicula;