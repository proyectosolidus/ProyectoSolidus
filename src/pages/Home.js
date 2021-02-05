import React from 'react'
import { Link } from 'react-router-dom'

import HeroImage from '../images/hero-image.svg'
import AboutImage from '../images/about-image.svg'
import './styles/Home.css'

const Home = () => {
	return(

		<React.Fragment>
			<section className="Home__hero">
				<div className="box-wrapper">
					<div className="Home__hero_container">
						<div className="Home__hero-content">
							<h1>Proyecto Solidus <br/>Soluciones para ONG's</h1>
							<p></p>
							<div className="Home__hero-content-buttons">
								<Link to="#contacto" className="hero-content-button primary-btn">Comenzar <b>gratis</b></Link>
							 	<Link to="#acerca" className="hero-content-button secundary-btn">Acerca</Link>
							</div>
						</div>
						<div className="Home__hero-image">
							<img src={HeroImage} />
						</div>
					</div>
				</div>
				
			</section>
			

			<section className="Home__about">
				<div className="box-wrapper">
					<div className="Home__about_container">
						<div className="Home__about-info">
							<h2>
								¿Que es el Proyecto Solidus?
							</h2>
							<p>
								El proyecto solidus es una asociación de voluntarios que ofrece, de manera totalmente altruista, servicios de desarrollo web a ONGs, protectoras, etc. que carecen de la financiación para ello. Principalmente buscamos ofrecer servicios con calidad profesional a asociaciones sin animo de lucro. <br/> Cada solicitud será evaluada de forma interna por los integrantes del proyecto, para estudiar su viabilidad, adecuación y cumplimiento de los requisitos.
							</p>
						</div>
						<div className="Home__about-image">
							<img src={AboutImage} />
						</div>	
					</div>
				</div>
			</section>

			<section className="Home__join">
				<div className="box-wrapper">
					<div className="Home__join_container">
						<h2>Se parte del Proyecto Solidus</h2>
						<p>
							Unetenos y ayudanos a ser mejores
						</p>
						<div className="marg-t Home__join-button">
							<Link to="/unirse" className="primary-btn">Unirse</Link>
						</div>
					</div>
				</div>
			</section>

		</React.Fragment>

	)
}

export default Home