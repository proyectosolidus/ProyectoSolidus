import React, { useState } from 'react'

import './styles/ContactForm.css'


const useForm = () => {
	const [formState, setFormState] = useState({form: {
			name: '',
			ongName: 'Unicef',
			email: '',
			emailBody: ''
		}})

	const handleChange = e => {

		setFormState({
			form: {
				...formState.form,
				[e.target.name]: e.target.value
			}}
		)
	}

	return {formState, setFormState, handleChange}
}



const ContactForm = () => {

	const {formState, setFormState, handleChange} = useForm()

	return(
		<div className="box-wrapper">
			<section className="Contact__container">
				<h2>Contacto</h2>
				<p>
					Cuéntanos sobre tu organización y nosotros <span>te ayudaremos gratis</span> <br/>
					Una vez que recibamos tu solicitud, esta será evaluada de forma interna por los integrantes del proyecto, para estudiar su viabilidad, adecuación y cumplimiento de los requisitos.
				</p>

				<form className="Contact-form">

					<label for="name">Nombre</label>
					<input onChange={handleChange} value={formState.name} id="name" type="text" name="name" />

					<label for="">Nombre de la organización</label>
					<input onChange={handleChange} value={formState.ongName} id="" type="text" name="ongName" />

					<label for="email">Correo</label>
					<input onChange={handleChange} value={formState.email} size="25" id="email" type="email" name="email" />

					<label for="emailBody">Cuentanos un poco sobre {formState.ongName}</label>
					<textarea onChange={handleChange} value={formState.emailBody} name="emailBody" placeholder={`¿Quien eres, que hace ${formState.ongName} y como podemos ayudarles?`} id="emailBody" type="text-area" className="ong-descrption"></textarea>

					<button submit="none" className="primary-btn Contact-form-button">ENVIAR</button>

				</form>
			</section>
		</div>
	)
}

export default ContactForm