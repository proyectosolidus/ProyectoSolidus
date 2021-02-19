import React from 'react'
import { Link } from 'react-router-dom'

import './styles/Header.css'

const Header = () => {
	return(
		<header className="Header">
			<Link className="Header__home" to="/">
				PS
			</Link>
			<nav className="Header__nav">
				<a href="/#acerca">Acerca</a>
				<a href="/#contacto">Contacto</a>
				<a target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLSdvnnTbpeFz1PTkVl5vDIrfWjP-TeDhZGFzpy5aB-d0OzZk5g/viewform">Unirse</a>
			</nav>
		</header>
	)
}	

export default Header