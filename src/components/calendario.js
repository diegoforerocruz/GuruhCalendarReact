import React, { Component } from "react";
import{ useState, useEffect } from 'react'

const Calendario= (props) => {
        
    

        let datos=[];        

        const [tableData, setData] = useState([])

    useEffect(() => {
        async function fetchData() {
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
        }
        fetchData()
    }, [])

        console.log(props)
        console.log(tableData)

        function render() {
            if(tableData.length>0){
                return(
                    <div>
                        <h2>Se va mostrar la información de la {props.cal}</h2>
                        
                            {tableData.map((elemento)=> {
                                
                                <p>{elemento.Name}</p>
                            })}
                        
                        
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