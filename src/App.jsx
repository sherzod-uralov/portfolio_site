import Nav from './components/hello/Nav.jsx'
import Hero from './components/hello/Hero.jsx'
import Footer from './components/hello/Footer.jsx'

function App() {
    return (
        <div className="">
            <header className="h-screen overflow-x-hidden overflow-y-hidden">
                <Nav />
                <Hero />
            </header>
            <Footer />
        </div>
    )
}

export default App
