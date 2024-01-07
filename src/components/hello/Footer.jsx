
import {
    FaGithub,
    FaInstagram,
    FaLinkedin,
    FaTelegramPlane,
} from 'react-icons/fa'
import { useContext } from 'react'
import { MyContext } from '../../context/Context_api.jsx'
import { Link } from 'react-router-dom'

const Footer = () => {
    const {burger} = useContext(MyContext)

    return (
        <footer className={` bottom-0 bg-[#011627]  fixed w-full z-50 `}>
            <div className="flex items-center justify-between sm:px-[20px] pl-[20px] border-solid border-[#1E2D3D] border-[1px]">
                <div className="flex items-center justify-between w-full sm:w-auto sm:justify-normal gap-[23.4px]">
                    <h2 className="flex gap-[9px] text-[#607B96] text-[15px] fira-code-regular font-normal footer-h2">
                        find <h3 className="me">me in:</h3>
                    </h2>
                    <div className="flex items-center">
                        <div className="cursor-pointer">
                            <Link to="https://t.me/web_dasturlash_dev" target="_blank" className="text-[#607B96] border-solid block border-l-[1px] px-[30px] border-[#1E2D3D] py-[20px]">
                                <FaTelegramPlane />
                            </Link>
                        </div>
                        <div className=" cursor-pointer">
                            <Link to="https://www.linkedin.com/in/sherzod-uralov-601b242a8/" target="_blank" className="text-[#607B96] block border-solid border-r-0 border-x-[1px] px-[30px] border-[#1E2D3D] py-[20px]">
                                <FaLinkedin />
                            </Link>
                        </div>
                        <div className=" cursor-pointer">
                            <Link to='https://www.instagram.com/dasturchi__kundaligi?igsh=MWZ6YjI1dnM2MGxqNQ==' target="_blank" className="block text-[#607B96] border-solid border-x-[1px] px-[30px] border-[#1E2D3D] py-[20px]">
                                <FaInstagram />
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="cursor-pointer text-[#607B96] hidden sm:block text-[15px] fira-code-regular font-normal  border-solid border-l-[1px] py-[16px] pl-[23px] border-[#1E2D3D]">
                    <div className="flex items-center gap-1">
                        <a
                            target="_blank"
                            href="https://github.com/sherzod-uralov"
                        >
                            @sherzod-uralov
                        </a>{' '}
                        <FaGithub />
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
