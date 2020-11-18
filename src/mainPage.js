import React, { Component } from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";

import Inicio from "./components/inicio";
import Propuesta from "./components/propuesta";
import Testimonios from "./components/testimonios";
import Faq from "./components/faq";
import Equipo from "./components/equipo";
 
class MainPage extends Component {
    render() {
        return (
            
            <HashRouter>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/" >Inicio</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/propuesta">Propuesta</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/testimonios">Testimonios</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/faq">FAQ</NavLink>
                            </li>
                            <li claclassNamess="nav-item">
                                <NavLink className="nav-link" to="/equipo">Equipo</NavLink>
                            </li>
                        </ul>
                    </div>
                </nav>                
                <div>
                    <div className="content">
                        <Route exact path="/" component={Inicio}/>
                        <Route path="/propuesta" component={Propuesta}/>
                        <Route path="/testimonios" component={Testimonios}/>
                        <Route path="/faq" component={Faq}/>
                        <Route path="/equipo" component={Equipo}/>
                    </div>
                </div>
            </HashRouter>
        );
    }
}

export default MainPage;