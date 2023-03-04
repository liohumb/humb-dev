import Form from '../../components/form/Form.jsx'
import Map from '../../components/map/Map.jsx'

import './contact.scss'

export default function Contact() {
    return (
        <section className="contact section">
            <div className="contact__container">
                <div className="contact__container-left">
                    <Form/>
                </div>
                <div className="contact__container-right">
                    <Map/>
                </div>
            </div>
        </section>
    )
}