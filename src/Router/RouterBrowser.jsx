import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from '../App.jsx'
import About from '../pages/About.jsx'
import Projects from '../pages/Projects.jsx'

const RouterBrowser = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/about" element={<About />} />
                <Route path="/projects" element={<Projects />} />
            </Routes>
        </BrowserRouter>
    )
}

export default RouterBrowser
