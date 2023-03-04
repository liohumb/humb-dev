import {useRef, useState} from 'react'
import emailjs from '@emailjs/browser'

import './form.scss'

export default function Form() {
    const form = useRef()
    const [success, setSuccess] = useState(null)
    const handleSubmit = (e) => {
        e.preventDefault()

        emailjs.sendForm('service_o38e22i', 'template_5k53zku', form.current, 'B9Cq2ujwmd-LYBb_e')
            .then((result) => {
                console.log(result.text)
                setSuccess(true)
            }, (error) => {
                console.log(error.text)
                setSuccess(false)
            })
    }
    return (
        <form className="form" ref={form} onSubmit={handleSubmit}>
            <div className="form__container">
                <label htmlFor="name"></label>
                <input type="text" name="name" id="name" placeholder="Votre nom"/>
                <label htmlFor="email"></label>
                <input type="email" name="email" id="email" placeholder="votre@email.com"/>
                <label htmlFor="content"></label>
                <textarea name="content" id="content" placeholder="Dites moi tout..."></textarea>
                {success ?
                    <span>Votre message a bien été envoyé :)</span>
                :
                    <button type="submit">Envoyer</button>
                }
            </div>
        </form>
    )
}