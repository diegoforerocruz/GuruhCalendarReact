import React from "react";
import{ useState, useEffect } from 'react'
import Events from './events'
import Pagination from './pagination'
import functionsUniversidades from "./services";


const Calendario= (props) => {   
    const { getEvents } = functionsUniversidades();
    const [tableData, setData] = useState([])
    const [eventosPagina] = useState(10)
    const [paginaActual, setPaginaActual] = useState(1)
    
    useEffect(() => {
        
        getEvents(props.cal).then((res) => {
            let arregloBack = []
            res.data.map(d => {
                let newObj = {
                    "FechaInicio": d.FechaInicio,
                    "FechaFin": d.FechaFin,
                    "Nombre": d.Nombre,
                    "Tipo": d.Tipo,
                    "Ubicacion": d.Ubicacion              
                }
                arregloBack.push(newObj)
            })
            setData(arregloBack)

        });          
    })

    let uniName
    if(props.cal === "5fdc1d33a42844151c8aaa25"){
        uniName="Universidad del Rosario"
    } else if(props.cal === "5fdc1c54a42844151c8aa9bd"){
        uniName="Universidad Tadeo Lozano"
    } else if(props.cal === "5fdc15dd804dde49ecdb28bc"){
        uniName="Universidad de los Andes"
    }
    const indexOfLastPost = paginaActual * eventosPagina;
    const indexOfFirstPost = indexOfLastPost - eventosPagina;
    const eventosActuales = tableData.slice(indexOfFirstPost,indexOfLastPost)
    const paginate = (pageNumber) => setPaginaActual(pageNumber)

   

    function render() {
        if(tableData.length>0){
            return(
                <div>   
                    <br/>
                    <h2>Se va mostrar la información de la {uniName}</h2>
                    <br/>
                    <Events events={eventosActuales} universidad={uniName}/>
                    <Pagination postPerpage={eventosPagina} totalPosts={tableData.length} paginate={paginate} />
                </div>      
            )
        }else{
            return(
                <div>
                    <h2>Aun no han cargado los datos de {uniName}</h2> 
                </div>
            )
        }
    }
    return (render())
}
export default Calendario