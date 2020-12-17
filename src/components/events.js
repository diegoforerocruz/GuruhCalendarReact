import React, {useState} from 'react';
import * as emailjs from "emailjs-com";

const SERVICE_ID = "service_qx8cewf";
const TEMPLATE_ID = "template_tg2a5xb";
const USER_ID = "user_i3DhlBthUvRHupWM205FJ";

const Events = ({events, universidad}) => {

    const [email, setEmail] = React.useState("");

    function handleClick(fecInicio, fecFin, evNombre, evTipo, evUbicacion) {
        console.log(email)
        var data = {
        to_email:email,
        universidad: universidad,
        nombre_evento: evNombre,
        tipo_evento: evTipo,
        fecha_inicio: fecInicio,
        fecha_fin: fecFin,
        direccion_evento: evUbicacion,
    };

    emailjs.send(SERVICE_ID, TEMPLATE_ID, data, USER_ID).then(
            function (response) {
                console.log(response.status, response.text);
            },
            function (err) {
                console.log(err);
            }
        );
    }


    return (
        <div>
            <form className="form-inline" id="formularioCorreo">
                <label className="my-1 mr-2" htmlFor="inlineFormCustomSelectPref" style={{fontSize:"1.8em"}}>¡Pon tu correo!</label>
                <input type="email" id="inlineFormCustomSelectPref" style={{fontSize:"1.6em",width:"60%"}} className="form-control bg-white border border-info" onChange={(event) => setEmail(event.target.value)} />
            </form>
            <br/>
            <br/>
            <table className="table" id="dtBasicExample">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col" style={{"width":"15%"}}>Inicio</th>
                        <th scope="col" style={{"width":"15%"}}>Fin</th>
                        <th scope="col" style={{"width":"30%"}}>Nombre</th>
                        <th scope="col" style={{"width":"10%"}}>Tipo</th>
                        <th scope="col" style={{"width":"15%"}}>Ubicación</th>
                        <th scope="col" style={{"width":"15%"}}>Notificación</th>   
                    </tr>
                </thead>
                <tbody>
                    {events.map((elemento,i)=> {  
                        return (
                            <tr key={`fila${i}`}>
                                <td key={`elemento1fila${i}`}>{elemento.FechaInicio}</td>
                                <td key={`elemento2fila${i}`}>{elemento.FechaFin}</td>
                                <td key={`elemento3fila${i}`}>{elemento.Nombre}</td>
                                <td key={`elemento4fila${i}`}>{elemento.Tipo}</td>
                                <td key={`elemento5fila${i}`}>{elemento.Ubicacion}</td>
                                <td key={`elemento6fila${i}`}>
                                    <button type="button" className="btn btn-info" form="formularioCorreo"
                                     onClick={()=>{handleClick(elemento.FechaInicio,elemento.FechaFin,elemento.Nombre,elemento.Tipo,elemento.Ubicacion)}} >
                                        Notificación
                                    </button>
                                </td>
                            </tr> 
                        )
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default Events;