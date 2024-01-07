import { useContext, useEffect, useRef, useState } from 'react'
import bold from '../../assets/svg/bolt-up-right.svg'
import SnakeGame from '../../game/Snake.jsx'
import { MyContext } from '../../context/Context_api.jsx'
import  blue from '../../assets/svg/Blue(1).svg'
import green from '../../assets/svg/Green(1).svg'
const Hero = () => {
    const [directionSnake, setDirectionSnake] = useState('RIGHT')
    const githubLink = '"' + 'https://github.com/sherzod-uralov' + '"'
    const { score, setScore, gameOver, start, setStart } = useContext(MyContext)
    const [scoreDrop, setScoreDrop] = useState([])
    const bubble = scoreDrop.slice(1, scoreDrop.length - 1)
    let animate = 0;

    const sectextRef = useRef(null)
    const handleArrowUp = () => {
        setDirectionSnake('UP')
    }

    const handleArrowDown = () => {
        setDirectionSnake('DOWN')
    }

    const handleArrowLeft = () => {
        setDirectionSnake('LEFT')
    }

    const handleArrowRight = () => {
        setDirectionSnake('RIGHT')
    }

    const measureExecutionTime = (func) => {
        const startTime = performance.now();
        func();
        const endTime = performance.now();
        const executionTime = endTime - startTime;
        console.log(`Funksiya ${func.name} ${executionTime} millisekundda ishga tushdi.`);
    };

    const textLoad = () => {
        let a = 0;
        let b = 4000;
        let c = 8000;
        setTimeout(() => {
            sectextRef.current.textContent = 'front-end engineer';
        }, a);
        setTimeout(() => {
            sectextRef.current.textContent = 'software engineer';
        }, b);
        setTimeout(() => {
            sectextRef.current.textContent = 'back-end developer';
        }, c);
        animate -= 10
    };

    measureExecutionTime(textLoad);

    useEffect(() => {
        textLoad();
        const intervalId = setInterval(() => {
            textLoad();
        }, 12000);

        return  () => clearInterval(intervalId);
    }, []);

    useEffect(() => {
        if (start) {
            setScoreDrop([2]);
            setStart(false);
        }
        setScoreDrop((prevScores) => [...prevScores, score]);
    }, [score]);

    return (
        <div className=" w-[1320px]  pt-[200px] m-auto">
            <div className="flex items-center justify-between relative">
                <img src={blue} alt="" className="absolute sm:hidden top-[-680px] -left-20 block" />
                <img src={green} alt="" className="absolute sm:hidden block -left-24 bottom-[-650px]" />
                <div className="sm:pl-10 pl-4 xl:pl-0">
                    <div>
                        <span className="fira-code-regular text-white font-medium text-[18px]">
                        Hi all. I am
                    </span>
                        <h1 className="text-white text-[62px] leading-[66px] pt-5 pb-6 fira-code-regular font-medium w-[291px] sm:w-auto mt-[-10px]">
                            Uralov Sherzod
                        </h1>
                        <div className="typewriter-container pb-[70px] mt-[-12px]">
                        <span className="text first-text fira-code-regular text-2xl text-lg pr-3 bottom-[2px] absolute">
                            {'>'}
                        </span>
                            <span
                                ref={sectextRef}
                                className="text sec-text fira-code-regular font-medium text-[#4D5BCE] sm:text-[32px] text-[28px]"
                            ></span>
                        </div>
                    </div>
                    <div>
                        <span className="text-[#607B96] fira-code-regular block pb-[5px] font-[16px]">
                            {'//'} complete the game to continue
                        </span>
                        <span className="text-[#607B96] fira-code-regular  font-[16px] hidden sm:block">
                            {'//'} you can also see it on my Github page
                        </span>
                        <div className="hidden sm:flex items-center gap-[7px] fira-code-regular pt-[6px]">
                            <p className="text-[#4D5BCE] text-[16px]">const</p>
                            <p className="text-[#43D9AD] text-[16px]">
                                githubLink
                            </p>
                            <p className="text-white">=</p>
                            <a
                                className="text-[#E99287]"
                                target="_blank"
                                href={'https://github.com/sherzod-uralov'}
                                rel="noreferrer"
                            >
                                {githubLink}
                            </a>
                        </div>
                        <div className="items-center gap-[7px] fira-code-regular flex sm:hidden pt-[6px]">
                            <p className="text-[#4D5BCE] text-[16px]">const</p>
                            <p className="text-[#43D9AD] text-[16px]">
                                githubLink
                            </p>
                            <p className="text-white">=</p>
                            <a
                                className="text-[#E99287]"
                                target="_blank"
                                href={'https://github.com/sherzod-uralov'}
                                rel="noreferrer"
                            >
                                https://
                            </a>
                        </div>
                        <span className="block sm:hidden fira-code-regular text-[#E99287] text-[16px]">github.com/sherzod-uralov</span>
                    </div>
                </div>
                <div className="relative xl:block hidden">
                    <svg
                        className="absolute anime2 top-[-240px] left-[-250px]"
                        width="864"
                        height="784"
                        viewBox="0 0 864 784"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <g opacity="0.4" filter="url(#filter0_f_64_1236)">
                            <path
                                d="M673.469 258.482L689.984 477.861L655.759 582.726L485.295 609.598L413.003 448.57L297.588 487.343L184.059 311.368L174 177.746L452.567 174.828L523.099 285.846L673.469 258.482Z"
                                fill="#43D9AD"
                            />
                        </g>
                        <defs>
                            <filter
                                id="filter0_f_64_1236"
                                x="0"
                                y="0.827728"
                                width="863.983"
                                height="782.77"
                                filterUnits="userSpaceOnUse"
                                colorInterpolationFilters="sRGB"
                            >
                                <feFlood
                                    floodOpacity="0"
                                    result="BackgroundImageFix"
                                />
                                <feBlend
                                    mode="normal"
                                    in="SourceGraphic"
                                    in2="BackgroundImageFix"
                                    result="shape"
                                />
                                <feGaussianBlur
                                    stdDeviation="87"
                                    result="effect1_foregroundBlur_64_1236"
                                />
                            </filter>
                        </defs>
                    </svg>
                    <svg
                        className="absolute anime"
                        width="800"
                        height="765"
                        viewBox="0 0 868 831"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <g opacity="0.4" filter="url(#filter0_f_64_1235)">
                            <path
                                d="M477.946 656.519L264.032 605.132L174.663 540.469L201.226 369.957L376.649 350.391L375.041 228.647L577.309 174.392L707.602 205.691L625.165 471.797L497.892 504.987L477.946 656.519Z"
                                fill="#4D5BCE"
                            />
                        </g>
                        <defs>
                            <filter
                                id="filter0_f_64_1235"
                                x="0.663574"
                                y="0.391769"
                                width="880.938"
                                height="830.128"
                                filterUnits="userSpaceOnUse"
                                colorInterpolationFilters="sRGB"
                            >
                                <feFlood
                                    floodOpacity="0"
                                    result="BackgroundImageFix"
                                />
                                <feBlend
                                    mode="normal"
                                    in="SourceGraphic"
                                    in2="BackgroundImageFix"
                                    result="shape"
                                />
                                <feGaussianBlur
                                    stdDeviation="87"
                                    result="effect1_foregroundBlur_64_1235"
                                />
                            </filter>
                        </defs>
                    </svg>
                    <div className="relative w-[510px] h-[475px] hero-right">
                        <img
                            className="absolute top-3 left-2"
                            src={bold}
                            alt=""
                        />
                        <img
                            className="absolute top-3 right-1"
                            src={bold}
                            alt=""
                        />
                        <img
                            className="absolute bottom-2 left-2"
                            src={bold}
                            alt=""
                        />
                        <img
                            className="absolute bottom-2 right-1"
                            src={bold}
                            alt=""
                        />
                        <div>
                            <div
                                className="hero-right-box rounded-[8px] top-[35px] pt-[15px] px-[13px] pb-[12px] right-[35px] absolute w-[181px] h-[148px]">
                                <p className="fira-code-regular text-white text-[14px]">
                                    {'//'} use keyboard <br /> {'//'} arrows to
                                    play
                                </p>
                                <div className="pt-[15px] block">
                                    <button
                                        onClick={handleArrowUp}
                                        className="bg-black rounded-[8px] block m-auto mb-[4px] px-[22px] py-[12px]"
                                    >
                                        <span className="bg-white triangle block"></span>
                                    </button>
                                    <div className="flex items-center justify-center gap-[4px]">
                                        <button
                                            onClick={handleArrowLeft}
                                            className="bg-black rounded-[8px] px-[22px] py-[12px]"
                                        >
                                            <span className="bg-white triangle block rotate-[-90deg]"></span>
                                        </button>
                                        <button
                                            onClick={handleArrowDown}
                                            className="bg-black rounded-[8px] px-[22px] py-[12px]"
                                        >
                                            <span className="bg-white triangle block rotate-[-60deg]"></span>
                                        </button>
                                        <button
                                            onClick={handleArrowRight}
                                            className="bg-black rounded-[8px] px-[22px] py-[12px]"
                                        >
                                            <span className="bg-white triangle block rotate-[90deg]"></span>
                                        </button>
                                    </div>
                                </div>
                                <div>
                                    <p className="text-white fira-code-regular text-[14px] pt-[30px]">
                                        // food left
                                    </p>
                                    <div className="flex items-center flex-wrap gap-5 pt-3">
                                        {bubble.map((e, i) => (
                                            <div
                                                key={i}
                                                className="bg-[#43D9AD] shadowss rounded-full w-[10px] transition-all h-[10px]"
                                            ></div>
                                        ))}
                                    </div>
                                    <div>
                                        {gameOver && (
                                            <h3 className="text-red-400 fira-code-bold absolute bottom-[-260px]">
                                                Your score: {score}
                                            </h3>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className="bg-[#011627D6] w-[238px] h-[405px] absolute top-[35px] left-[30px] rounded-[8px]">
                            <SnakeGame value={directionSnake} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
