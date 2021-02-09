import React from 'react'

import ContacForm from '../components/ContactForm'

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
								<a href="#contacto" className="hero-content-button primary-btn">Comenzar <b>gratis</b></a>
							 	<a href="#acerca" className="hero-content-button secundary-btn">Acerca</a>
							</div>
						</div>
						<div className="Home__hero-image">
							<img src={HeroImage} />
						</div>
					</div>
				</div>
				
			</section>
			

			<section id="acerca" className="box-wrapper">
				<div className="Home__about">
					<div className="Home__about-info">
						<h2>
							¿Qué es el Proyecto Solidus?
						</h2>
						<p>
							El proyecto solidus es una asociación de voluntarios que busca ofrecer, de manera totalmente altruista, servicios de desarrollo web con calidad profesional a asociaciones sin ánimo de lucro, que carecen de financiación para ello. 
						</p>
					</div>
					<div className="Home__about-image">
						<img src={AboutImage} />
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
							<a target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLSdvnnTbpeFz1PTkVl5vDIrfWjP-TeDhZGFzpy5aB-d0OzZk5g/viewform" className="primary-btn">Unirse</a>
						</div>
					</div>
				</div>
			</section>

			<ContacForm />

		</React.Fragment>

	)
}

export default Home