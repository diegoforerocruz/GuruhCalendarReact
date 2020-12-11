import React, { useState, useEffect } from "react";


const DatosOrg = (props) => {
    cons [data, setData] = ""


    return (    
        <tr>
            <td>{props.data.FechaInicio}</td>
            <td>{props.data.FechaFin}</td>
            <td>{props.data.Nombre}</td>
            <td>{props.data.Tipo}</td>
            <td>{props.data.Ubicacion}</td>
        </tr>   
    )

}


export default DatosOrg;