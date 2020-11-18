import React, { Component } from "react";
import {ReactComponent as Bell} from "../../public/images/"
import {ReactComponent as Schedule} from "../images/schedule"
 
class Inicio extends Component {
  render() {
    return (
        <div>
            <header className="jumbotron">
                <div id="encabezado" className="mx-auto">
                    <h1 className="display-3 font-weight-bold text-center">Recopilación de Calendarios Académicos</h1>
                </div>
            </header>
            <main className="mx-auto">
                <h2 className="text-center">¡Ten en un solo lugar todas las fechas de los calendarios académicos de Bogotá!</h2>
                <div className="row mx-auto">
                    <div className="col-12 col-md-3 offset-md-3">
                        <Bell />
                        <p className="font-weight-bold text-center">Obten en un solo lugar las fechas limites de admisión y de eventos de las universidades en Bogotá</p>
                    </div>
                    <div className="col-12 col-md-3">
                        <Schedule />
                        <p className="font-weight-bold text-center">Recibe notificaciones de las fechas limites de admisión de las universidades de Bogotá</p>
                    </div>
                </div>
            </main>
        </div>
    );
  }
}
 
export default Inicio;