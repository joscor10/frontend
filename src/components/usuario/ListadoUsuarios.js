import React,{Fragment,useState,useEffect} from 'react';
import {getData} from '../../Servicios';

const Listadousuarios = () => {

    //declaracion de state
    const [usuarios,setUsuarios]= useState([]);

    //efect para consultar datos
    useEffect(()=>{
        
         getData('usuarios/')
            .then(res=>{
                setUsuarios(res);
            })

             // eslint-disable-next-line
    },[setUsuarios]);

    return ( 
        <Fragment>
            <h1>Lista de Usuarios</h1>
          
            <table className="table">
                <thead className="thead-dark">
                    <tr>
                    <th scope="col">RUT</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Email</th>
                    <th scope="col">Direccion</th>
                    <th scope="col">Telefono</th>                 
                    </tr>
                </thead>
                <tbody>
                    
                        {usuarios.map(usuario=>(
                            <tr key={usuario.Id} >
                                <th>{usuario.RUT}</th>
                                <td>{usuario.Nombre}</td>
                                <td>{usuario.Email}</td>
                                <td>{usuario.Direccion}</td>
                                <td>{usuario.Telefono}</td>                                
                            </tr>
                        ))}
                        
                    
                   
                </tbody>
            </table>
        </Fragment>
     );
}
 
export default Listadousuarios;