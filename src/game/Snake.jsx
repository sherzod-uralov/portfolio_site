import {useContext, useEffect, useRef, useState} from 'react'
import {MyContext} from '../context/Context_api.jsx'

const numRows = 20
const numCols = 20

function SnakeGame({value}) {
    const initialSnake = [
        {row: 10, col: 10},
        {row: 10, col: 9},
    ]

    const [snake, setSnake] = useState(initialSnake)
    const [food, setFood] = useState(generateFood())

    const {score, setScore, gameOver, setGameOver, start, setStart} =
        useContext(MyContext)

    const snakeRef = useRef(snake)
    const directionRef = useRef(value)

    useEffect(() => {
        snakeRef.current = snake
    }, [snake])

    useEffect(() => {
        directionRef.current = value
    }, [value])

    useEffect(() => {
        const handleKeyPress = (e) => {
            switch (e.key) {
                case 'ArrowUp':
                    directionRef.current = 'UP'
                    break
                case 'ArrowDown':
                    directionRef.current = 'DOWN'
                    break
                case 'ArrowLeft':
                    directionRef.current = 'LEFT'
                    break
                case 'ArrowRight':
                    directionRef.current = 'RIGHT'
                    break
                default:
                    break
            }
        }

        window.addEventListener('keydown', handleKeyPress)

        return () => {
            window.removeEventListener('keydown', handleKeyPress)
        }
    }, [])

    useEffect(() => {
        if (!gameOver) {
            const moveInterval = setInterval(moveSnake, 200)

            return () => clearInterval(moveInterval)
        }
    }, [snake, gameOver])

    useEffect(() => {
        if (checkCollision(snake)) {
            setGameOver(true)
        }

        if (checkFoodCollision()) {
            setScore((score) => score + 1)
            setFood(generateFood())
            increaseSnakeLength()
        }
    }, [snake, food, score])

    function generateFood() {
        const newFood = {
            row: Math.floor(Math.random() * numRows),
            col: Math.floor(Math.random() * numCols),
        }

        if (
            snake.some(
                (segment) =>
                    segment.row === newFood.row && segment.col === newFood.col
            )
        ) {
            return generateFood()
        }

        return newFood
    }

    function checkCollision(newSnake) {
        const head = newSnake[0]
        return (
            head.row < 0 ||
            head.row >= numRows ||
            head.col < 0 ||
            head.col >= numCols ||
            newSnake
                .slice(1)
                .some(
                    (segment) =>
                        segment.row === head.row && segment.col === head.col
                )
        )
    }

    function checkFoodCollision() {
        const head = snake[0]
        return head.row === food.row && head.col === food.col
    }

    function increaseSnakeLength() {
        const newSegment = {...snake[snake.length - 1]}
        snake.push(newSegment)
        setSnake([...snake])
    }

    function moveSnake() {
        if (gameOver) return

        const newSnake = [...snakeRef.current]
        const head = {...newSnake[0]}

        switch (directionRef.current) {
            case 'UP':
                head.row -= 1
                break
            case 'DOWN':
                head.row += 1
                break
            case 'LEFT':
                head.col -= 1
                break
            case 'RIGHT':
                head.col += 1
                break
            default:
                break
        }

        newSnake.unshift(head)

        if (checkFoodCollision()) {
            setScore((score) => score + 1)
            setFood(generateFood())
        } else {
            newSnake.pop()
        }

        if (checkCollision(newSnake)) {
            setGameOver(true)
            return
        }

        setSnake(newSnake)
    }

    function startGame() {
        setStart(true)
        setSnake(initialSnake)
        setFood(generateFood())
        setGameOver(false)
        setScore(0)
    }

    return (
        <div className="">
            <div>
                <div className="grid place-items-center place-content-center grid-cols-20">
                    {Array.from({length: numRows}, (_, rowIndex) => (
                        <div key={rowIndex} className="flex">
                            {Array.from({length: numCols}, (_, colIndex) => (
                                <div
                                    className={` w-[11.4px] h-[20.2px]  ${
                                        snake.some(
                                            (segment) =>
                                                segment.row === rowIndex &&
                                                segment.col === colIndex
                                        )
                                            ? `bg-[#43D9AD]`
                                            : food.row === rowIndex &&
                                            food.col === colIndex
                                                ? 'bg-[#43D9AD] shadowss rounded-full w-[10px] transition-all h-[9.99px]'
                                                : ''
                                    }`}
                                    key={colIndex}
                                />
                            ))}
                        </div>
                    ))}
                </div>
            </div>
            {gameOver && (
                <div>
                    <span
                        className="w-full block absolute game-over m-auto text-center fira-code-regular text-[#43D9AD] text-[24px] py-[8px] rounded-md  bottom-[100px] bg-[#011627D6]">
                        GAME OVER!
                    </span>
                    <button
                        onClick={startGame}
                        className={`fira-code-regular absolute left-[56px] bottom-8 bg-[#FEA55F] py-[10px] px-[14px]`}
                    >
                        {' '}
                        start-game
                    </button>
                </div>
            )}
        </div>
    )
}

export default SnakeGame
