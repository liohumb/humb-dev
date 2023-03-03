import Hero from './containers/hero/Hero.jsx'
import About from './containers/about/About.jsx'
import Work from './containers/work/Work.jsx'
import Contact from './containers/contact/Contact.jsx'

import './assets/styles/style.scss'

function App() {

  return (
    <main className="main">
        <Hero/>
        <About/>
        <Work/>
        <Contact/>
    </main>
  )
}

export default App
