import './form.scss'

export default function Form() {
    return (
        <form className="form">
            <div className="form__container">
                <label htmlFor="name"></label>
                <input type="text" name="name" id="name" placeholder="Votre nom"/>
                <label htmlFor="email"></label>
                <input type="email" name="email" id="email" placeholder="votre@email.com"/>
                <label htmlFor="content"></label>
                <textarea name="content" id="content" placeholder="Dites moi tout..."></textarea>
                <button type="submit">Envoyer</button>
            </div>
        </form>
    )
}