import Nav from '../components/hello/Nav.jsx'
import About_hero from '../components/about/About_hero.jsx'
import Footer from '../components/hello/Footer.jsx'

const About = () => {

    document.body.style.overflow = 'hidden'
    return (
        <div className="overflow-hidden">
            <Nav />
            <About_hero />

                      <Footer />


        </div>
    )
}

export default About
