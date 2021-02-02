import React from 'react'
import { Link } from 'react-router-dom'

import HeroImage from '../images/hero-image.svg'
import './styles/Home.css'

const Home = () => {
	return(

		<React.Fragment>
			<section className="Home__hero">
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
			</section>
			<div class="custom-shape-divider-top-1612197622">
    		<svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        	<path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="shape-fill"></path>
    		</svg>
			</div>
		</React.Fragment>

	)
}

export default Home