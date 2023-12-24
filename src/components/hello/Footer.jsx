import React from 'react'
import {
    FaGithub,
    FaInstagram,
    FaLinkedin,
    FaTelegramPlane,
} from 'react-icons/fa'

const Footer = () => {
    return (
        <footer className="fixed w-full bg-[#011627] z-10 bottom-0">
            <div className="flex items-center justify-between px-[20px] border-solid border-[#1E2D3D] border-[1px]">
                <div className="flex items-center gap-[23.5px]">
                    <h2 className="text-[#607B96] text-[15px] fira-code-regular font-normal">
                        find me in:
                    </h2>
                    <div className="flex items-center">
                        <div className="cursor-pointer">
                            <div className="text-[#607B96] border-solid  border-l-[1px] px-[30px] border-[#1E2D3D] py-[20px]">
                                <FaTelegramPlane />
                            </div>
                        </div>
                        <div className=" cursor-pointer">
                            <div className="text-[#607B96] border-solid border-r-0 border-x-[1px] px-[30px] border-[#1E2D3D] py-[20px]">
                                <FaLinkedin />
                            </div>
                        </div>
                        <div className=" cursor-pointer">
                            <div className="text-[#607B96] border-solid border-x-[1px] px-[30px] border-[#1E2D3D] py-[20px]">
                                <FaInstagram />
                            </div>
                        </div>
                    </div>
                </div>
                <h2 className="cursor-pointer text-[#607B96] text-[15px] fira-code-regular font-normal  border-solid border-l-[1px] py-[16px] pl-[23px] border-[#1E2D3D]">
                    <div className="flex items-center gap-1">
                        <a
                            target="_blank"
                            href="https://github.com/sherzod-uralov"
                        >
                            @sherzod-uralov
                        </a>{' '}
                        <FaGithub />
                    </div>
                </h2>
            </div>
        </footer>
    )
}

export default Footer
