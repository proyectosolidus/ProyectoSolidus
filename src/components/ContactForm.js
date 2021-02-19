import React, { useState } from 'react'

import './styles/ContactForm.css'


const useForm = () => {
	const [formState, setFormState] = useState({form: {
			name: '',
			ongName: '',
			email: '',
			webSite: '',
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
		<div id="contacto" className="box-wrapper">
			<section className="Home__contact">
				<h2>Contacto</h2>
				<p>
					Cuéntanos sobre tu organización y desde Solidus <span>te ayudaremos gratis</span> <br/>
					Una vez que recibamos tu solicitud, esta será evaluada de forma interna por el equipo, para estudiar su viabilidad, adecuación y cumplimiento de los requisitos.
				</p>

				<form className="Contact-form">

					<label for="name">Nombre</label>
					<input className="contact-input" onChange={handleChange} value={formState.form.name} id="name" type="text" name="name" />

					<label for="ongName">Nombre de la organización</label>
					<input className="contact-input" onChange={handleChange} value={formState.form.ongName} id="ongName" type="text" name="ongName" />

					<label for="email">Correo Electrónico</label>
					<input className="contact-input" onChange={handleChange} value={formState.form.email} size="25" id="email" type="email" name="email" />

					<label for="webSite">Sitio web</label>
					<input className="contact-input" onChange={handleChange} value={formState.form.webSite} id="webSite" type="text" name="webSite" />

					<label for="emailBody">Cuéntanos un poco sobre {formState.form.ongName}</label>
					<textarea onChange={handleChange} value={formState.form.emailBody} name="emailBody" placeholder={`¿Quien eres, que hace ${formState.form.ongName} y como podemos ayudarles?`} id="emailBody" type="text-area" className="contact-input ong-descrption"></textarea>

					<button type="button" className="primary-btn Contact-form-button">ENVIAR</button>

				</form>
			</section>
		</div>
	)
}

export default ContactForm