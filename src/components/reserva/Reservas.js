import React,{Fragment,useEffect,useState} from 'react';
import { getData } from '../../Servicios';

const Reservas = () => {

    //declaracion de state
    const [reservas,SetReservas]=useState([]);

    // efect para consultar datos
    useEffect(()=>{
        
        getData('ViewReserva/')
            .then(res=>{
                SetReservas(res);
            })    
       
             // eslint-disable-next-line
    },[SetReservas]);
    
    return ( 
        <Fragment>
        <h1>Reservas</h1>
        <table className="table">
            <thead className="thead-dark">
                <tr>
                <th scope="col">Fecha</th>
                <th scope="col">Titulo</th>
                <th scope="col">Director</th>
                <th scope="col">Nombre Cliente</th>
                <th scope="col">Telefono Cliente</th>
                <th scope="col">Estado</th>
                </tr>
            </thead>
            <tbody>
                
                    {reservas.map(reserva=>(
                        <tr key={reserva.Id} >
                            <th>{reserva.Fecha}</th>
                            <td>{reserva.Titulo}</td>
                            <td>{reserva.Director}</td>
                            <td>{reserva.Nombre}</td>
                            <td>{reserva.Telefono}</td>
                            <td>{reserva.Estado}</td>
                           
                        </tr>
                    ))}
                    
                
               
            </tbody>
            </table>
    </Fragment>
     );
}
 
export default Reservas;