import React from 'react'
import './styles.css'
import { Link } from 'react-router-dom'

import logoImg from '../../assets/images/logo.svg'
import landingImg from '../../assets/images/landing.svg'

import studyIcon from '../../assets/images/icons/study.svg'
import giveClasesIcon from '../../assets/images/icons/give-classes.svg'
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg'


function Landing() { // Componentes sempre devem começar com letra Maiúscula
    return (
        <div id="page-lading">
            <div id="page-lading-content" className="content">
                
                <div className="logo-container">
                    <img src={logoImg} alt="Proffy"/>
                    <h2>Sua Plataforma de estudos Online</h2>
                </div>

                <img src={landingImg} alt="Plataforma de estudos" className="hero-image"/>

                <div className="buttons-container">
                    <Link to="/study" className="study">
                        <img src={studyIcon} alt="Estudar"/>
                        Estudar
                    </Link>

                    <Link to="/give-classes" className="give-classes">
                        <img src={giveClasesIcon} alt="Dar Aula"/>
                        Dar aula
                    </Link>
                </div>
                
                <span className="total-conections">
                    Total de 200 conexões já realizadas <img src={purpleHeartIcon} alt="Coração Roxo"/>
                </span>
            </div>
        </div>
    )
}

export default Landing