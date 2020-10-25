import React,{useState,useEffect} from 'react';
import Pelicula from './pelicula/Pelicula';
import {getData} from '../Servicios';

const Home = ({userSesion}) => {
    
    // declaracion de state
    const [peliculas,setPeliculas]= useState([]);

    
    // efect para cargar datos
    useEffect(()=>{
        getData('peliculas')
            .then(res=>{
                setPeliculas(res);
            })
    },[setPeliculas]);

    return ( 
        <div className="col-xs-12 conte">
            {peliculas.map(pelicula=>(
                    <Pelicula key={pelicula.Id} pelicula={pelicula} userSesion={userSesion}/>
            ))}
        </div>
     );
}
 
export default Home;