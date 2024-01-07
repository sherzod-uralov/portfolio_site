import Nav from './components/hello/Nav.jsx'
import Hero from './components/hello/Hero.jsx'
import Footer from './components/hello/Footer.jsx'
import { useContext } from 'react'
import { MyContext } from './context/Context_api.jsx'

function App() {
const {burger} = useContext(MyContext)
    return (
        <div>
                <header className="h-screen overflow-x-hidden overflow-y-hidden">
                <Nav />
                <Hero />
            </header>
            <div className={`${burger ? 'sm:block' : 'hidden'} sm:block`}>
                <Footer/>
            </div>
        </div>
    )
}

export default App
