import React,{useState} from 'react';
import {postData} from '../../Servicios';
import {Redirect} from 'react-router-dom';

const Pelicula = ({pelicula,userSesion}) => {

    // declaracion de state
    const [redirect,SetRedirect]= useState(false);

    // funcion para reservar pelicula
    const reservar=id=>{

        const data={          
            IdUsuario: userSesion.id,
            IdPelicula: id,
            Estado: 1
        }

        postData('Reserva', data)
        .then(res => {           
                alert(res);
                SetRedirect(true);
        })
    }

    if(redirect){
        return <Redirect to="/misreservas"/>
    }

    return ( 
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{pelicula.Titulo}</h5>
                <h6 className="card-subtitle mb-2 text-muted"><strong>Director:</strong> {pelicula.Director}</h6>
                <p className="card-text"><strong>Descripción:</strong> {pelicula.Descripcion}</p>
                <p className="card-text"><strong>Disponible:</strong> {pelicula.Disponible}</p>
                {userSesion.id!==0?
                (<button className="btn btn-primary btn-block " onClick={()=>reservar(pelicula.Id)} disabled={pelicula.Disponible===0?true:false}>Reservar</button>):null}
            </div>
        </div>
     );
}
 
export default Pelicula;