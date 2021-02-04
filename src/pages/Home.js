import React from 'react'
import { Link } from 'react-router-dom'

import HeroImage from '../images/hero-image.svg'
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
			
		</React.Fragment>

	)
}

export default Home