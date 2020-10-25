import React,{useState,useEffect,Fragment} from 'react';
import {getFilter,putData} from '../../Servicios';

const TusReservas = ({userSesion}) => {
    
    //declaracion de states
    const [reservas,SetReservas]=useState([]);
    const [consultar,setConsultar]=useState(true);

    // efect para consultar datos
    useEffect(()=>{
        if(consultar){
            getFilter('ViewReserva/',userSesion.id)
            .then(res=>{
                SetReservas(res);
            })
        }
        setConsultar(false)
       
             // eslint-disable-next-line
    },[SetReservas,setConsultar,consultar]);

    // funcion para devolver pelicula
    const devolver= id=>{
        const data={
            id:id,
            estado:2
        };
        
        putData('Reserva/',id,data)
            .then(res=>{
                alert(res);
                setConsultar(true);
            })
    };

    return ( 
        <Fragment>
            <h1>reservas</h1>
            <table className="table">
                <thead className="thead-dark">
                    <tr>
                    <th scope="col">Fecha</th>
                    <th scope="col">Titulo</th>
                    <th scope="col">Director</th>
                    <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    
                        {reservas.map(reserva=>(
                            <tr key={reserva.Id} >
                                <th>{reserva.Fecha}</th>
                                <td>{reserva.Titulo}</td>
                                <td>{reserva.Director}</td>
                                <td><button className="btn btn-danger" onClick={()=>devolver(reserva.Id)}>Devolver</button></td>
                            </tr>
                        ))}
                        
                    
                   
                </tbody>
                </table>
        </Fragment>
        
     );
}
 
export default TusReservas;