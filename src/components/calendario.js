import React from "react";
import{ useState, useEffect } from 'react'
import CalendarioURosario from '../Ejson/CalendarioRosarioDepurado.json'
import CalendarioUTadeo from '../Ejson/CalendarioTadeoDepurado.json'
import CalendarioUniandes from '../Ejson/CalendarioUniandesDepurado.json'

//import ContactUs from './contactUs'
import * as emailjs from "emailjs-com";

const SERVICE_ID = "service_qx8cewf";
const TEMPLATE_ID = "template_tg2a5xb";
const USER_ID = "user_i3DhlBthUvRHupWM205FJ";

const Calendario= (props) => {
        
    

//    let datos=[];        

    const [tableData, setData] = useState([])

    useEffect(() => {
        async function fetchData() {
            /*
            const URL = "https://gist.githubusercontent.com/josejbocanegra/5dc69cb7feb7945ef58b9c3d84be2635/raw/64146e99e4416da3a8be2e2da4156cb87b3f6fd0/series-en.json"
            const res = await (await fetch(URL)).json()

            let actualData = []
            res.map(d => {
                let newObj = {
                    "id": d.id,
                    "Name": d.name,
                    "Channel":d.channel,
                    "Description":d.description               
                }
                actualData.push(newObj)
                
                return d
            })
            
            setData(actualData)
            */
            if(props.cal === "Universidad del Rosario"){
                setData(CalendarioURosario)
            } else if(props.cal === "Universidad Tadeo Lozano"){
                setData(CalendarioUTadeo)
            } else if(props.cal === "Universidad de los Andes"){
                setData(CalendarioUniandes)
            }
        }
        fetchData()
    })
    const [email, setEmail] = React.useState("");

    function handleClick(fecInicio, fecFin, evNombre, evTipo, evUbicacion) {
        console.log(email)
        var data = {
        to_email:email,
        universidad: props.cal,
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

        function render() {
            if(tableData.length>0){
                return(
                    <div>
                        
                        <br/>
                        <h2>Se va mostrar la información de la {props.cal}</h2>
                        <br/>
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
                                    {tableData.map((elemento,i)=> {  
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
                    
                )
            }else{
                return(
                    <div>
                        <h2>Aun no han cargado los datos de {props.cal}</h2>
                        
                        
                    </div>
                )
            }
        }

        return (render())
    
}

export default Calendario