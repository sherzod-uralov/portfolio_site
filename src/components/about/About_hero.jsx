import React, { useState } from 'react'
import { IoFolderSharp, IoTerminalSharp } from 'react-icons/io5'
import { FaGamepad } from 'react-icons/fa6'
import mage from '../../assets/svg/Vector.svg'
import arrow_folder from '../../assets/svg/arrow_folder.svg'
import { Link } from 'react-router-dom'
import { FaPhoneAlt } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

const AboutHero = () => {
    const [accordionOpen, setAccordionOpen] = useState(false)
    const [contactsOpen, setContactsOpen] = useState(false)

    const toggleAccordion = (state, set) => {
        set(!state)
    }

    return (
        <div>
            <div className="fixed left-0">
                <div className="flex flex-col h-screen gap-[33px] border-t-0 pl-[24px] pt-[17px] pr-[20px] border-solid border-[1px] border-[#1E2D3D]">
                    <IoTerminalSharp className="text-[#607B96] opacity-[0.4] w-[24px] h-[24px]" />
                    <img className="w-[24px] h-[24px]" src={mage} alt="mage" />
                    <FaGamepad className="text-[#607B96] opacity-[0.4] w-[24px] h-[24px]" />
                </div>
            </div>
            <div className="ml-[70px] w-[227.4px] border-solid border-[1px] fixed h-screen border-l-0 border-t-0 border-[#1E2D3D]">
                <div
                    className={`cursor-pointer flex py-[10px] ${
                        accordionOpen ? 'border-b-[1px]' : 'border-b-0'
                    } px-3 border-t-0 border-l-0 border-r-0  items-center gap-2 border-solid border-[1px] border-[#1E2D3D]`}
                    onClick={() =>
                        toggleAccordion(accordionOpen, setAccordionOpen)
                    }
                >
                    <svg
                        className={`${
                            accordionOpen ? 'rotate-[120deg]' : '-rotate-90'
                        } transition-all`}
                        xmlns="http://www.w3.org/2000/svg"
                        width="9"
                        height="7"
                        viewBox="0 0 9 7"
                        fill="none"
                    >
                        <path
                            d="M4.74998 6.65186L0.499969 0.651856L9 0.651855L4.74998 6.65186Z"
                            fill="white"
                        />
                    </svg>
                    <h2 className="fira-code-regular text-white text-[16px]">
                        personal-info
                    </h2>
                </div>
                {accordionOpen && (
                    <div className="flex transition-all flex-col pl-[16px] gap-y-[8px] py-[22px]">
                        <div className="flex items-center gap-[13px]">
                            <img src={arrow_folder} alt="arrow_folder" />
                            <div className="flex items-center gap-[8.5px]">
                                <IoFolderSharp className="text-[18px] text-[#E99287] " />
                                <h2 className="text-white fira-code-regular text-[16px]">
                                    bio
                                </h2>
                            </div>
                        </div>
                        <div className="flex items-center gap-x-[13px]">
                            <img src={arrow_folder} alt="arrow_folder" />
                            <div className="flex items-center gap-[8.5px]">
                                <IoFolderSharp className="text-[18px] text-[#43D9AD] " />
                                <h2 className="text-white fira-code-regular text-[16px]">
                                    interests
                                </h2>
                            </div>
                        </div>
                        <div className="flex items-center gap-[13px]">
                            <img src={arrow_folder} alt="arrow_folder" />
                            <div className="flex items-center gap-[8.5px]">
                                <IoFolderSharp className="text-[18px] text-[#3A49A4] " />
                                <h2 className="text-white fira-code-regular text-[16px]">
                                    education
                                </h2>
                            </div>
                        </div>
                    </div>
                )}
                {/*contacts*/}
                <div
                    className={`cursor-pointer flex py-[10px] px-3  border-l-0 border-r-0  items-center gap-2 border-solid border-[1px] border-[#1E2D3D]`}
                    onClick={() =>
                        toggleAccordion(contactsOpen, setContactsOpen)
                    }
                >
                    <svg
                        className={`${
                            contactsOpen ? 'rotate-[120deg]' : '-rotate-90'
                        } transition-all`}
                        xmlns="http://www.w3.org/2000/svg"
                        width="9"
                        height="7"
                        viewBox="0 0 9 7"
                        fill="none"
                    >
                        <path
                            d="M4.74998 6.65186L0.499969 0.651856L9 0.651855L4.74998 6.65186Z"
                            fill="white"
                        />
                    </svg>
                    <h2 className="fira-code-regular text-white text-[16px]">
                        contacts
                    </h2>
                </div>
                {contactsOpen && (
                    <div className="flex pl-4 py-[22px] gap-y-1 flex-col">
                        <Link
                            to="mailto:sherzoduralov432@gmail.com"
                            className="flex items-center gap-[10px]"
                        >
                            <MdEmail className="text-[18px]  text-[#607B96] " />
                            <h2 className="text-white fira-code-regular text-[16px]">
                                sherzoduralov432
                            </h2>
                        </Link>
                        <Link
                            to="mailto:sherzoduralov432@gmail.com"
                            className="flex items-center gap-[10px]"
                        >
                            <FaPhoneAlt className="text-[18px] text-sm text-[#607B96] " />
                            <h2 className="text-white fira-code-regular text-[16px]">
                                +998 99-400-37-31
                            </h2>
                        </Link>
                    </div>
                )}
            </div>
        </div>
    )
}

export default AboutHero
