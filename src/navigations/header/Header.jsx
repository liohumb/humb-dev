import './header.scss'

export default function Header() {
    return (
        <header className="header">
            <nav className="header__social">
                <a href="https://www.linkedin.com/in/liohumb/"
                   className="header__social-link"
                   target="_blank"
                   title="Lien vers le profil linkedin de Lionel Humbert">
                    <i className='bx bxl-linkedin'></i>
                </a>
                <a href="https://github.com/liohumb"
                   className="header__social-link" target="_blank"
                   title="Lien vers le profil github de Lionel Humbert">
                    <i className='bx bxl-github'></i>
                </a>
                <a href="mailto:helloliohumb@gmail.com"
                   className="header__social-link"
                   title="Lien pour envoyer un email à Lionel Humbert">
                    <i className='bx bx-at'></i>
                </a>
                <a href="./images/cv/cv2lio.pdf"
                   className="header__social-link"
                   download
                   title="Lien pour télécharger le curriculum vitæ de Lionel Humbert">
                    <i className='bx bxs-file-pdf'></i>
                </a>
            </nav>
        </header>
    )
}