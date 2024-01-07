import { Link, useLocation } from 'react-router-dom'
import { RxHamburgerMenu } from "react-icons/rx";
import { useContext} from 'react'
import { saveAs } from 'file-saver';
import { MyContext } from '../../context/Context_api.jsx'
const Nav = () => {
    const location = useLocation().pathname
    const {burger,setBUrger} = useContext(MyContext)
    const search = location.split('').filter((e) => e !== '/')
    const closeMneu = () => {
        setBUrger(false)
    }



    return (
        <nav>
            <div
                className={`${burger && 'bg-[#011627]'}  z-50 fixed top-0 w-full flex items-center justify-between xl:pr-[20px] border-solid border-[#1E2D3D] border-[1px]`}>
                <div
                    className="flex  justify-between w-[100%] xl:w-[60%]  xl:justify-normal items-center gap-0 xl:gap-[150px]">
                    <h2 className="text-[#607B96] pl-[20px] text-[15px] block py-[15px] fira-code-regular font-normal">
                        uralov-sherzod
                    </h2>
                    <RxHamburgerMenu onClick={() => setBUrger(!burger)}
                                     className="mr-[18px] z-10 sm:hidden block text-2xl h-10 text-[#607B96]" />
                    <div
                        className={`flex items-center bg-[#011627] flex-col h-full z-10 sm:flex-row left-0  sm:gap-0 sm:w-auto w-full sm:top-0 ${burger ? 'top-[55px]' : 'top-[-100%]'} transition-all sm:sticky fixed`}>
                        <div className="relative cursor-pointer w-full sm:w-auto">
                            <Link
                                onClick={closeMneu}
                                to="/"
                                className={`${
                                    search.length === 0
                                        ? 'text-white'
                                        : 'text-[#607B96]'
                                }  border-solid border-x-[1px] px-[30px] border-b-[1px] sm:border-b-0 block border-[#1E2D3D] py-[15px] text-[15px] fira-code-regular font-normal`}
                            >
                                _hello
                            </Link>
                            {search.length === 0 ? (
                                <span className="bg-[#FEA55F] h-[3px] block w-full absolute -bottom-[0px]"></span>
                            ) : (
                                ''
                            )}
                        </div>
                        <div className="relative cursor-pointer w-full sm:w-auto">
                            <Link
                                onClick={closeMneu}
                                to="/about"
                                className={`${
                                    location === '/about' ||
                                    location === '/about/'
                                        ? 'text-white'
                                        : 'text-[#607B96]'
                                }  border-solid border-x-[1px] border-b-[1px] sm:border-b-0 block border-r-[1px] border-l-[1px] sm:border-r-0 sm:border-l-0 px-[30px] border-[#1E2D3D] py-[15px] text-[15px] fira-code-regular font-normal`}
                            >
                                _about-me
                            </Link>
                            {location === '/about' ? (
                                <span className="bg-[#FEA55F] h-[3px] block w-full absolute bottom-[0px]"></span>
                            ) : (
                                ''
                            )}
                        </div>
                        <div className="relative cursor-pointer w-full sm:w-auto">
                            <Link
                                onClick={closeMneu}
                                to="/projects"
                                className={`${
                                    location === '/projects' ||
                                    location === '/projects/'
                                        ? 'text-white'
                                        : 'text-[#607B96]'
                                }  border-solid border-x-[1px] border-b-[1px] sm:border-b-0 block px-[30px] border-[#1E2D3D] py-[15px] text-[15px] fira-code-regular font-normal`}
                            >
                                projects
                            </Link>
                            {location === '/projects' ? (
                                <span className="bg-[#FEA55F] h-[3px] block w-full absolute bottom-[0px]"></span>
                            ) : (
                                ''
                            )}
                        </div>
                        <div className="relative cursor-pointer block sm:hidden w-full sm:w-auto">
                            <Link
                                to={'https://drive.google.com/file/d/1uSl0RLpsMPynjjqZBn0zJ5Qllsq6wzFI/view?usp=sharing'}
                                target='_blank'
                                onClick={closeMneu}
                             className= {`border-solid border-x-[1px] text-[#607B96] border-b-[1px] sm:border-b-0 block px-[30px] border-[#1E2D3D] py-[15px] text-[15px] fira-code-regular font-normal`}
                            >
                                download_cv
                            </Link>
                        </div>
                    </div>
                </div>
                <Link
                    to={'https://drive.google.com/file/d/1uSl0RLpsMPynjjqZBn0zJ5Qllsq6wzFI/view?usp=sharing'}
                    target='_blank'
                    className="cursor-pointer text-[#607B96] text-[15px] border-b-[1px] sm:border-b-0 fira-code-regular font-normal xl:block hidden border-solid border-l-[1px] py-[15px] pl-[23px] border-[#1E2D3D]"
                >
                    download_cv
                </Link>
            </div>
        </nav>
    )
}

export default Nav
