import React, { Component } from "react";
import Calendario from './calendario'
import '../css/styles.css'
import HeaderImg from './img/pageHeader.png';
import AppInfo from './appInfo';


class Inicio extends Component {

    constructor(props) {
        super(props);
        this.state = {value: 'Ninguna'};
        this.handleChange = this.handleChange.bind(this);
      }
    
      handleChange(event) {
        this.setState({value: event.target.value});
      }

    render() {
        return (
            <div>
                <div className="banner" id="header-section">
                    <div className="container">
                        <h1 className="font-weight-semibold">Recopilación de calendarios académicos</h1>
                        <h6 className="font-weight-normal text-muted pb-3">Proyecto de investigación y creación en pregrado</h6>
                        <br/>
                        <br/>
                        <form id="formulario" className="form-inline" style={{"marginLeft":"2.5em"}}>
                            <label className="my-1" htmlFor="inlineFormCustomSelectPref"></label>
                            <select form="formulario" className="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref"
                            value={this.state.value} onChange={this.handleChange} 
                            style={{"width": "100%", "height": "50px","fontSize":"20px", "paddingLeft":"1em","marginRight":"0px"}}>
                                <option value="Ninguna" style={{"fontSize":"20px"}}>Escoge una organización</option>
                                <option value="5fdc15dd804dde49ecdb28bc" style={{"fontSize":"20px"}}>Universidad de los Andes</option>
                                <option value="5fdc1c54a42844151c8aa9bd" style={{"fontSize":"20px"}}>Universidad Tadeo Lozano</option>
                                <option value="5fdc1d33a42844151c8aaa25" style={{"fontSize":"20px"}}>Universidad del Rosario</option>
                            </select>
                        </form>
                        {this.state.value !== "Ninguna"? <Calendario cal={this.state.value} /> : <p>escoge una institucion y espera a los resultados</p>}
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <img src={HeaderImg} alt="Personas hablando" className="img-fluid vert-move" width="430" />
                        <br/>
                    </div>
                </div>
                <AppInfo /> 
                <footer className="border-top">
                    <p className="text-center text-muted pt-4">Copyright 2020 - <a href="https://www.guruh.com.co/" className="px-1">GurUh / Grupo de Investigación</a></p>
                </footer>
            </div>
        );
    }
}
 
export default Inicio;