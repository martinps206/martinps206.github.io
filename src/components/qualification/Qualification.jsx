import React, { useState } from 'react'
import './qualification.css'

const Qualification = () => {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    }

    return (
        <section className="qualification section" id="portfolio">
            <h2 className="section__title">Qualification</h2>
            <span className="section__subtitle">My personel journey</span>

            <div className="qualification__container container">
                <div className="qualification__tabs">
                    <div
                        className={
                            toggleState === 1
                                ? "qualification__button qualification__active button--flex"
                                : "qualification__button button--flex"
                        }
                        onClick={() => toggleTab(1)}
                    >
                        <i className="uil uil-graduation-cap qualification__icon"></i> Education
                    </div>

                    <div
                        className={
                            toggleState === 2
                                ? "qualification__button qualification__active button--flex"
                                : "qualification__button button--flex"
                        }
                        onClick={() => toggleTab(2)}
                    >
                        <i className="uil uil-briefcase-alt qualification__icon"></i> Experience
                    </div>
                </div>

                <div className="qualification__sections">
                    <div
                        className={
                            toggleState === 1
                                ? "qualification__content qualification__content-active"
                                : "qualification__content"
                        }
                    >
                        <div className="qualification__data">
                            <div></div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <div>
                                <h3 className="qualification__title">Diplomado en Métodos Numéricos Aplicados a la Epidemiologia</h3>
                                <span className="qualification__subtitle">MINSA</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i> 2015
                                </div>
                            </div>
                        </div>
                        <br></br>
                        <div className="qualification__data">
                            <div></div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <div>
                                <h3 className="qualification__title">Diplomado Aplicaciones del Algebra Lineal</h3>
                                <span className="qualification__subtitle">UNLP</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i> 2017
                                </div>
                            </div>
                        </div>
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Computación Científica</h3>
                                    <span className="qualification__subtitle">Universidad Nacional Mayor de San Marcos</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i> 2009 - 2014 
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>
                        <br></br>
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Licenciatura Informática</h3>
                                <span className="qualification__subtitle">Universidad Nacional de La Plata </span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i> 2020 - Present
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <div>
                                <h3 className="qualification__title">Diplomado Estadística Aplicada</h3>
                                <span className="qualification__subtitle">UNLP</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i> 2022
                                </div>
                            </div>
                        </div>
                        <br></br>
                        <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <div>
                                <h3 className="qualification__title">Desarrollador Software</h3>
                                <span className="qualification__subtitle">AYIGROUP (La Segunda - Arcor - Farmalink)</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i> 2020 - 2024
                                </div>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Certified Tech Developer</h3>
                                <span className="qualification__subtitle">Digital House</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i> 2020 - 2021
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>
                        <br></br>
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Bootcamp Java</h3>
                                <span className="qualification__subtitle">Sicos Informática - La Plata</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i> 2022
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <div>
                                <h3 className="qualification__title">Desarrollador de Software Backend</h3>
                                <span className="qualification__subtitle">CDA Informática (Banco Galicia)</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i> 2024 - 2025
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Qualification