import React from 'react'
import {Link} from 'react-router-dom'

import Error404Image from '../images/error-404.svg'
import './styles/Error404.css'

const Error404 = () => {
	return(
		<div className="box-wrapper">
			<div className="Error404">
				<div className="Error404__img">
					<img src={Error404Image} />
				</div>
				<Link to="/" className="primary-btn">Volver al Home</Link>
			</div>
		</div>
	)
}

export default Error404