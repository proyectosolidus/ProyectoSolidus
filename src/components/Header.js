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
				<a href="#acerca">Acerca</a>
				<a href="#contacto">Contacto</a>
				<a href="/unirse">Unirse</a>
			</nav>
		</header>
	)
}	

export default Header