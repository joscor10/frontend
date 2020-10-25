import React, { useState ,useEffect,Fragment} from 'react';
import { getData,deleteData } from '../../Servicios';
import {Link} from 'react-router-dom';

const ListadoPeliculas = () => {

    // declracion de states
    const [peliculas,setPeliculas]= useState([]);
    const [consultar,setConsultar]=useState(true);

    // efect para consultar datos
    useEffect(()=>{
        if(consultar){
            getData('peliculas/')
            .then(res=>{
                setPeliculas(res);
            })
        }
        setConsultar(false)
       
             // eslint-disable-next-line
    },[setPeliculas,setConsultar,consultar]);

    // funcion para eliminar pelicula
    const eliminar=id=>{
        deleteData("peliculas/",id)
            .then(res=>{
                alert(res);
                setConsultar(true);
            })
    }
    
    return ( 
        <Fragment>
            <h1>Lista de Peliculas</h1>
            <Link className="btn btn-success mb-3" to="/peliculas/add">Agregar</Link>
            <table className="table">
                <thead className="thead-dark">
                    <tr>
                    <th scope="col">Titulo</th>
                    <th scope="col">Descripción</th>
                    <th scope="col">Director</th>
                    <th scope="col">Disponible</th>
                    <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    
                        {peliculas.map(pelicula=>(
                            <tr key={pelicula.Id} >
                                <th>{pelicula.Titulo}</th>
                                <td>{pelicula.Descripcion}</td>
                                <td>{pelicula.Director}</td>
                                <td>{pelicula.Disponible}</td>
                                <td>
                                    <Link className="btn btn-warning ml-3 mt-1" to={"/peliculas/edit/"+pelicula.Id}>Editar</Link>
                                    <button className="btn btn-danger ml-3 mt-1" onClick={()=>eliminar(pelicula.Id)} >Eliminar</button>
                                </td>
                            </tr>
                        ))}
                        
                    
                   
                </tbody>
            </table>
        </Fragment>
        
     );
}
 
export default ListadoPeliculas;