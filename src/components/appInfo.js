import React from 'react';
import Group1 from './img/group-1.png';
import Group2 from './img/group-2.png';

const AppInfo = () => {
    return (
        <div className="content-wrapper">
            <div className="container">   
                <section className="features-overview" id="product">
                    <div className="content-header">
                        <h2>¿Cómo funciona?</h2>
                        <h6 className="section-subtitle text-muted">¡Ten en un solo lugar las fechas de los calendarios académicos de Bogotá!</h6>
                    </div>
                    <div className="row align-items-center">
                        <div className="col-12 col-lg-7 grid-margin grid-margin-lg-0" data-aos="fade-right">
                            <h3 className="m-0" style={{"color": "#DB334C"}}>Calendario</h3>
                            <div className="col-lg-7 col-xl-6 p-0">
                                <p className="py-4 m-0 text-muted">Sabemos que buscar las fechas de todas las universidades a las que piensas postularte puede ser tedioso. </p>
                                <p className="font-weight-medium text-muted">Es por eso por lo que creamos un solo lugar donde puedes obtener las fechas límite de admisión (aplicar, becas y eventos importantes) de las mejores universidades en Bogotá.</p>
                            </div>    
                        </div>
                        <div className="col-12 col-lg-5 p-0 img-digital grid-margin grid-margin-lg-0" data-aos="fade-left">
                            <img src={Group1} alt="Girl with a calendar" className="img-fluid vert-move"/>
                        </div>
                        </div>
                    <div className="row align-items-center">
                        <div className="col-12 col-lg-7 text-center flex-item grid-margin" data-aos="fade-right">
                            <img src={Group2} alt="Boy with a mobile phone" className="img-fluid vert-move" />
                        </div>
                        <div className="col-12 col-lg-5 flex-item grid-margin" data-aos="fade-left">
                            <h3 className="m-0" style={{"color": "#EF7F39"}}>Notificaciones</h3>
                            <div className="col-lg-9 col-xl-8 p-0">
                                <p className="py-4 m-0 text-muted">Una vez decidas que universidad y carrera deseas estudiar, es importante no perder las fechas de admisiones. Es por esto que diseñamos una forma fácil y efectiva de comunicarte cuando están próximas a cerrarse las convocatorias seleccionadas.</p>
                                <p className="pb-2 font-weight-medium text-muted">Recibe notificaciones de las fechas límite de admisión de las universidades de Bogotá.</p>
                            </div>
                        </div>
                    </div>
                </section>     
            </div>
        </div>
    );
};

export default AppInfo;