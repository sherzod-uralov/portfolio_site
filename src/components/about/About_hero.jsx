import { useState } from 'react'
import { IoFolderSharp, IoTerminalSharp } from 'react-icons/io5'
import { FaGamepad } from 'react-icons/fa6'
import { FaCommentAlt } from "react-icons/fa";
import { IoMdStar } from "react-icons/io";
import mage from '../../assets/svg/Vector.svg'
import arrow_folder from '../../assets/svg/arrow_folder.svg'
import { Link } from 'react-router-dom'
import { FaPhoneAlt } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { BiSolidFileTxt } from "react-icons/bi";
import dev from '../../assets/svg/dev.svg'
import { data } from '../../data/data.js'

const AboutHero = () => {
    const [accordionOpen, setAccordionOpen] = useState(true )
    const [contactsOpen, setContactsOpen] = useState(false)
    const [interests,setInterests] = useState(false)
    const [education,setEducation] = useState(false)
    const [bio,setBio] = useState(false)
    const personalInfo = 'personal-info'
    const contacts = 'contacts'
    const [openedFolder, setopenedFolder] = useState([{opened:true,name:personalInfo}])
    const [text,setText] = useState(data.bio.text)

    const calc = () => {
        let pixel = 0;
        pixel += accordionOpen ? 300 : 0;
        pixel += interests ? 100 : 0;
        pixel += accordionOpen ? 100 : 0;
        pixel += bio ? 100 : 0;
        pixel += contactsOpen ? 100 : 0;
        pixel += education ? 100 : 0;

        return pixel;
    };



    const toggleAccordion = (state, set, name) => {
        setopenedFolder((prevFolders) => {
            const folderIndex = prevFolders.findIndex((e) => e.name === name)

            if (folderIndex !== -1) {
                // Folder exists, update its state
                const updatedFolders = [...prevFolders]
                updatedFolders[folderIndex] = {
                    name: name,
                    opened: !prevFolders[folderIndex].opened,
                }
                return updatedFolders
            } else {
                // Folder doesn't exist, add it to the state
                return [...prevFolders, { name: name, opened: true }]
            }
        })

        set(!state)
    }


    const handleCloseFolder = (name) => {
        setopenedFolder((prevFolders) => {
            const folderIndex = prevFolders.findIndex((e) => e.name === name)

            if (folderIndex !== -1) {
                const updatedFolders = [...prevFolders]
                updatedFolders[folderIndex] = {
                    name: name,
                    opened: false,
                }
                return updatedFolders
            }

            return prevFolders
        })
        if (name === personalInfo) {
            setAccordionOpen(false)
        }
        if (name === 'contacts') {
            setContactsOpen(false)
        }
    }

    const openFolderFunc = (state,setState) => {
        setState(!state)
    }

    return (
        <div className="flex pt-[54px]  md:flex-row flex-col h-screen">
            <div className="lg:block hidden">
                <div className="flex flex-col h-[92vh] gap-[33px] border-t-0 pl-[24px] pt-[17px] pr-[20px] border-solid border-[1px] border-[#1E2D3D]">
                    <IoTerminalSharp className="text-[#607B96] opacity-[0.4] w-[24px] h-[24px]" />
                    <img className="w-[24px] h-[24px]" src={mage} alt="mage" />
                    <FaGamepad className="text-[#607B96] opacity-[0.4] w-[24px] h-[24px]" />
                </div>
            </div>
            <div className="min-w-[227.6px]  border-solid border-[1px] sticky md:h-full h-auto border-l-0 border-t-0 border-[#1E2D3D]">
                <div
                    className={`cursor-pointer flex py-[6.6px] ${
                        accordionOpen ? 'border-b-[1px]' : 'border-b-0'
                    } px-3 border-t-0 border-l-0 border-r-0  items-center gap-2 border-solid border-[1px] border-[#1E2D3D]`}
                    onClick={() =>
                        toggleAccordion(
                            accordionOpen,
                            setAccordionOpen,
                            personalInfo
                        )
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
                        {personalInfo}
                    </h2>
                </div>
                {accordionOpen && (
                    <div className="flex transition-all flex-col pl-[16px] gap-y-[8px] py-[22px]">
                        <div>
                            <div
                                onClick={() => setBio(!bio)}
                                className="flex items-center gap-[13px]"
                            >
                                <img
                                    src={arrow_folder}
                                    alt="arrow_folder"
                                    className={`${
                                        !bio ? 'rotate-[0deg]' : 'rotate-90'
                                    }`}
                                />
                                <div className="flex items-center gap-[8.5px]">
                                    <IoFolderSharp className="text-[18px] text-[#E99287] " />
                                    <h2 className="text-white fira-code-regular text-[16px]">
                                        bio
                                    </h2>
                                </div>
                            </div>
                            {bio && (
                                <div className="pl-[22px] pt-[5px] flex flex-col gap-2">
                                    <div
                                        onClick={() => {
                                            setText(data.bio.text)
                                            setBio(false)
                                            setInterests(false)
                                            setEducation(false)
                                        }}
                                        className="flex items-center cursor-pointer gap-[8px]"
                                    >
                                        <BiSolidFileTxt className="text-[#607B96] text-xl" />
                                        <h2 className="fira fira-code-regular text-[#607B96] text-[16px]">
                                            about_me.txt
                                        </h2>
                                    </div>
                                </div>
                            )}
                        </div>
                        <div>
                            <div
                                onClick={() =>
                                    openFolderFunc(interests, setInterests)
                                }
                                className="flex items-center gap-x-[13px]"
                            >
                                <img
                                    src={arrow_folder}
                                    alt="arrow_folder"
                                    className={`${
                                        !interests
                                            ? 'rotate-[0deg]'
                                            : 'rotate-90'
                                    }`}
                                />
                                <div className="flex items-center gap-[8.5px]">
                                    <IoFolderSharp className="text-[18px] text-[#43D9AD] " />
                                    <h2 className="text-white fira-code-regular text-[16px]">
                                        interests
                                    </h2>
                                </div>
                            </div>
                            {interests && (
                                <div className="pl-[22px] pt-[5px] flex flex-col gap-2">
                                    <div
                                        onClick={() => {
                                            setText(data.sport.text)
                                            setBio(false)
                                            setInterests(false)
                                            setEducation(false)
                                        }}
                                        className="flex items-center cursor-pointer gap-[8px]"
                                    >
                                        <BiSolidFileTxt className="text-[#607B96] text-xl" />
                                        <h2 className="fira fira-code-regular text-[#607B96] text-[16px]">
                                            sport.txt
                                        </h2>
                                    </div>
                                    <div
                                        onClick={() => {
                                            setText(data.games.text)
                                            setBio(false)
                                            setInterests(false)
                                            setEducation(false)
                                        }}
                                        className="flex items-center cursor-pointer gap-[8px]"
                                    >
                                        <BiSolidFileTxt className="text-[#607B96] text-xl" />
                                        <h2 className="fira fira-code-regular text-[#607B96] text-[16px]">
                                            game.txt
                                        </h2>
                                    </div>
                                    <div
                                        onClick={() => {
                                            setText(data.books.text)
                                            setBio(false)
                                            setInterests(false)
                                            setEducation(false)
                                        }}
                                        className="flex items-center cursor-pointer gap-[8px]"
                                    >
                                        <BiSolidFileTxt className="text-[#607B96] text-xl" />
                                        <h2 className="fira fira-code-regular text-[#607B96] text-[16px]">
                                            book.txt
                                        </h2>
                                    </div>
                                </div>
                            )}
                        </div>
                        <div>
                            <div
                                onClick={() =>
                                    openFolderFunc(education, setEducation)
                                }
                                className="flex items-center gap-x-[13px]"
                            >
                                <img
                                    src={arrow_folder}
                                    alt="arrow_folder"
                                    className={`${
                                        !education
                                            ? 'rotate-[0deg]'
                                            : 'rotate-90'
                                    }`}
                                />
                                <div className="flex items-center gap-[8.5px]">
                                    <IoFolderSharp className="text-[18px] text-[#3A49A4] " />
                                    <h2 className="text-white fira-code-regular text-[16px]">
                                        education
                                    </h2>
                                </div>
                            </div>
                            {education && (
                                <div className="pl-[22px] pt-[5px] flex flex-col gap-2">
                                    <div
                                        onClick={() => {
                                            setText(data.education.text)
                                            setBio(false)
                                            setInterests(false)
                                            setEducation(false)
                                        }}
                                        className="flex items-center cursor-pointer gap-[8px]"
                                    >
                                        <BiSolidFileTxt className="text-[#607B96] text-xl" />
                                        <h2 className="fira fira-code-regular text-[#607B96] text-[16px]">
                                            university.txt
                                        </h2>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                )}
                {/*contacts*/}
                <div
                    className={`cursor-pointer flex py-[6.5px] px-3 border-b-0 md:border-b-[1px]  border-l-0 border-r-0 ${!contactsOpen ? '' : 'border-b-[1px]'}  items-center gap-2 border-solid border-[1px] border-[#1E2D3D]`}
                    onClick={() =>
                        toggleAccordion(contactsOpen, setContactsOpen, contacts)
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
                        {contacts}
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
                            to="tel:+998994003731"
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
            <div className="xl:w-auto h-full w-full">
                <div className="">
                    <div className="flex items-center">
                        {openedFolder?.map(
                            (e, i) =>
                                e.opened && (
                                    <div
                                        key={i}
                                        className="flex items-center gap-[49px] py-[8.2px] border-solid border-[1px] border-b-0 border-[#1E2D3D] border-t-0 border-l-0 px-[9px]"
                                    >
                                        <h2 className="text-[14px] fira-code-regular text-[#607B96]">
                                            {e.name}
                                        </h2>
                                        <svg
                                            onClick={() =>
                                                handleCloseFolder(e.name)
                                            }
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="19"
                                            height="19"
                                            viewBox="0 0 19 19"
                                            fill="none"
                                        >
                                            <g>
                                                <path
                                                    d="M9.34771 8.71879L13.0602 5.00629L14.1207 6.06679L10.4082 9.77929L14.1207 13.4918L13.0602 14.5523L9.34771 10.8398L5.63521 14.5523L4.57471 13.4918L8.28721 9.77929L4.57471 6.06679L5.63521 5.00629L9.34771 8.71879Z"
                                                    fill="#607B96"
                                                />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_64_1646">
                                                    <rect
                                                        width="18"
                                                        height="18"
                                                        fill="white"
                                                        transform="translate(0.347656 0.779297)"
                                                    />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </div>
                                )
                        )}
                    </div>
                </div>
                {/*center*/}
                <div
                    className={`${
                        accordionOpen || contactsOpen ? 'mt-0' : 'mt-[37px]'
                    } xl:w-[670px] w-full border-l-0 h-full border-solid  border-[1px] border-[#1E2D3D] overflow-auto`}
                >
                    {accordionOpen && (
                        <div className="hidden sm:flex gap-[40px] pt-[18px] overflow-auto pl-[15px] sm:pl-[38px] pb-4">
                            {text.length > 1 && (
                                <div className="fira-code-regular hidden sm:block text-[#607B96]">
                                    {text.split('\n').map((e, i) => (
                                        <p key={i}>{i + 1}</p>
                                    ))}
                                </div>
                            )}
                            {text.length > 1 && (
                                <div className="mb-40">
                                    {text
                                        .split('\n')
                                        .map((line, index, array) => {
                                            if (index === array.length - 1) {
                                                return (
                                                    <p
                                                        key={index}
                                                        className="text-[#607B96] text-[16px] fira-code-regular"
                                                    >
                                                        {line}
                                                        {' **/'}
                                                    </p>
                                                )
                                            } else if (index === 0) {
                                                return (
                                                    <p
                                                        key={index}
                                                        className="text-[#607B96] text-[16px] fira-code-regular"
                                                    >
                                                        {'/**'}
                                                        {line}

                                                    </p>
                                                )
                                            } else {
                                                return (
                                                    <p
                                                        key={index}
                                                        className="text-[#607B96] text-[16px] fira-code-regular"
                                                    >
                                                        * {line}

                                                    </p>
                                                )
                                            }
                                        })}
                                </div>
                            )}
                        </div>
                    )}
                    {
                        accordionOpen && (
                            <div className={`flex sm:hidden gap-[40px] pr-5 sm:h-auto h-[55%] pb-10 pt-[18px] pl-[15px] overflow-auto sm:pl-[38px]`}>
                                <p className={`text-[#607B96] text-[16px] fira-code-regular pt-3 pb-4`}>{text}</p>
                            </div>
                        )
                    }
                </div>
            </div>
            <div className="xl:flex hidden">
                <div>
                    <span className="ml-[26px] block w-[1px] h-full bg-[#1E2D3D]"></span>
                    <div className="block h-[1px] w-[27px] absolute top-[91px] bg-[#1E2D3D]"></div>
                    <div className="block h-[10px] w-[22px] translate-x-[2px] absolute top-[95px] bg-[#607B96]"></div>
                </div>
            </div>
            <div className="border-solid border-[1px] xl:block hidden border-l-0 border-t-0 border-[#1E2D3D] w-full h-full">
                <div className="block h-[1px] w-full absolute top-[91px] bg-[#1E2D3D]"></div>
                <div className="block h-full w-[1px] right-[26px] absolute top-[92px] bg-[#1E2D3D]"></div>
                <div className="block h-[10px] w-[22px] top-[95px] absolute right-[2.5px] bg-[#607B96]"></div>
                <div className="pt-8">
                    <h2 className="text-[#607B96] pl-[40px] pt-[20px] fira-code-regular text-[18px]">
                        {'//'} Code snippet showcase:
                    </h2>
                </div>
                <div className="pt-[78px]  pl-[40px] pr-[70px]">
                    <div>
                        <div className="flex items-start justify-between">
                            <div className="flex gap-[10px]">
                                <img src={dev} alt="developer" />
                                <div>
                                    <h3 className="text-[#5565E8] fira-code-regular text-[14px] font-black">
                                        @uralov-sherzod
                                    </h3>
                                    <p className="text-[#607B96] text-[12px] fira-code-regular">
                                        Created 1 day ago
                                    </p>
                                </div>
                            </div>
                            <div className="flex gap-[17px]">
                                <div className="flex gap-[5px] items-center">
                                    <FaCommentAlt className="text-[#607B96]" />
                                    <p className="text-white fira-code-regular text-[14px]">
                                        details
                                    </p>
                                </div>
                                <div className="flex gap-[5px] items-center">
                                    <IoMdStar className="text-2xl -translate-y-[2px] text-[#607B96]" />
                                    <p className="text-[#607B96] fira-code-regular text-[14px]">
                                        3 starts
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="px-[29px] mt-10 py-[23px] rounded-[15px] border-solid border-[1px] border-[#1E2D3D] w-full bg-[#011221]">
                        <p className="w-[605px] pl-[30px]  fira-code-regular text-[#607B96]">
                            {`initializeModelChunk<T>(chunk: ResolvedModelChunk): T {
  const value: T = parseModel(chunk._response, chunk._value);
  const initializedChunk: InitializedChunk<T> = (chunk: any);
  initializedChunk._status = INITIALIZED;
  initializedChunk._value = value;
 
}`}
                        </p>
                        <p className="fira-code-regular pl-[30px] text-[#607B96]">return value;</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutHero
