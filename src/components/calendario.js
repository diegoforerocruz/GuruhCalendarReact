import React, { Component } from "react";
import{ useState, useEffect } from 'react'
import CalendarioURosario from '../Ejson/CalendarioRosarioDepurado.json'
import CalendarioUTadeo from '../Ejson/CalendarioTadeoDepurado.json'
import CalendarioUniandes from '../Ejson/CalendarioUniandesDepurado.json'

import DatosOrg from './datosOrg';

const Calendario= (props) => {
        
    

        let datos=[];        

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

        function render() {
            if(tableData.length>0){
                return(
                    <div>
                        <br/>
                        <h2>Se va mostrar la información de la {props.cal}</h2>
                        <br/>
                            <table className="table" id="dtBasicExample">
                                <thead className="thead-dark">
                                    <tr>
                                        <th scope="col" style={{"width":"15%"}}>Inicio</th>
                                        <th scope="col" style={{"width":"15%"}}>Fin</th>
                                        <th scope="col" style={{"width":"40%"}}>Nombre</th>
                                        <th scope="col" style={{"width":"10%"}}>Tipo</th>
                                        <th scope="col" style={{"width":"20%"}}>Ubicación</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {tableData.map((elemento)=> {  
                                        return (
                                            <tr>
                                                <td>{elemento.FechaInicio}</td>
                                                <td>{elemento.FechaFin}</td>
                                                <td>{elemento.Nombre}</td>
                                                <td>{elemento.Tipo}</td>
                                                <td>{elemento.Ubicacion}</td>
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