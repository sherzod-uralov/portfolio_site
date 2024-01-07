import React, { createContext, useState } from 'react'

// Create a context
export const MyContext = createContext()

// Create a provider
function ContextApiProvider({ children }) {
    const [burger,setBUrger] = useState(false)
    const [state, setState] = useState('Initial State')
    const [score, setScore] = useState(0)
    const [gameOver, setGameOver] = useState(false)
    const [start, setStart] = useState(false)

    const updateState = (newState) => {
        setState(newState)
    }

    const contextValue = {
        state,
        score,
        burger,
        setBUrger,
        start,
        setStart,
        gameOver,
        setGameOver,
        setScore,
        updateState,
    }

    return (
        <MyContext.Provider value={contextValue}>{children}</MyContext.Provider>
    )
}

export default ContextApiProvider
