import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from '../App.jsx'
import About from '../pages/About.jsx'

const RouterBrowser = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </BrowserRouter>
    )
}

export default RouterBrowser
