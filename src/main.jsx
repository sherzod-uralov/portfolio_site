import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/index.css'
import RouterBrowser from './Router/RouterBrowser.jsx'
import ContextApiProvider from './context/Context_api.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <ContextApiProvider>
            <RouterBrowser></RouterBrowser>
        </ContextApiProvider>
    </React.StrictMode>
)
