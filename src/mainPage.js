import React, { Component } from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";

import Inicio from "./components/inicio";
import Propuesta from "./components/propuesta";
import LogoImg from './components/img/logo.png'
import './css/styles.css'

class MainPage extends Component {
    render() {
        return (
            
            <HashRouter>
                <nav className="navbar navbar-expand-lg pl-3 pl-sm-0" id="navbar">
                    <div className="container">
                        <div className="navbar-brand-wrapper d-flex w-100">
                            <img src={LogoImg} alt="logo" height="70"/>
                            <button className="navbar-toggler ml-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="mdi mdi-menu navbar-toggler-icon"></span>
                            </button> 
                        </div>
                        <div className="collapse navbar-collapse navbar-menu-wrapper" id="navbarSupportedContent">
                            <ul className="navbar-nav align-items-lg-center align-items-start ml-auto">
                                <li className="d-flex align-items-center justify-content-between pl-4 pl-lg-0">
                                    <button className="navbar-toggler close-button" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                        <span className="mdi mdi-close navbar-toggler-icon pl-5"></span>
                                    </button>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/" >Inicio</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/propuesta">Propuesta</NavLink>
                                </li>
                               
                            </ul>
                        </div>
                    </div> 
                </nav>                 
                <div>
                    <div className="content">
                        <Route exact path="/" component={Inicio}/>
                        <Route path="/propuesta" component={Propuesta}/>
                        
                    </div>
                </div>
            </HashRouter>
        );
    }
}

export default MainPage;