import React, { useEffect, useState } from 'react'
import { FaReact } from 'react-icons/fa'
import { BiLogoVuejs } from 'react-icons/bi'
import { FaHtml5 } from 'react-icons/fa'
import projectsDb from '../../projects/database.js'
import { Link } from 'react-router-dom'
import { GrGraphQl } from "react-icons/gr";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { SiExpress } from 'react-icons/si'
const SkeletonLoader = () => {
    return (
        <div>
            <div className="flex items-center gap-5 pb-2">
                <Skeleton height={5}  width={100} highlightColor={'#1E2D3D'} />
                <Skeleton height={5}  width={100} highlightColor={'#1E2D3D'} />
            </div>
            <div
                className="max-w-[360px] h-[314px] border-t-0 border-solid bg-[#011221] border-[1px] border-[#1E2D3D] rounded-[15px] animate-pulse">
                <Skeleton height={150} width={360}   style={{ borderTopLeftRadius: '15px', borderTopRightRadius: '15px' }}
                          enableAnimation={true}  duration={3} />
                <div className="pl-[31px] pt-[24px] pr-5">
                    <Skeleton height={5} count={3} width={200}  />
                    <Skeleton height={40} width={150}  />
                </div>
            </div>
        </div>
    )
}
const Pages = () => {
    const [accordionOpen, setAccordionOpen] = useState(true)
    const [react, setReact] = useState(false)
    const [vue, setVue] = useState(false)
    const [graphql, setGraphql] = useState(false)
    const [show, setShow] = useState(false)
    const [html, setHtml] = useState(false)
    const [express, setExpress] = useState(false)
    const [filterArr, setFilterArr] = useState([])

    const CustomCheckbox = ({ isChecked, label, icon, disabled, setState }) => {
        const handleCheckboxChange = () => {
            setState(!isChecked)

            if (!isChecked) {
                setFilterArr((prevArr) => [...prevArr, label])
            } else {
                setFilterArr((prevArr) =>
                    prevArr.filter((item) => item !== label)
                )
            }
        }

        return (
            <div className="pl-3 pt-[17px]">
                <label
                    className={`gap-[10px] custom-checkbox flex items-center ${
                        disabled ? 'opacity-[0.4]' : ''
                    }`}
                >
                    <div>
                        <input
                            type="checkbox"
                            checked={isChecked}
                            onChange={handleCheckboxChange}
                            disabled={disabled}
                        />
                        <span className="checkmark translate-y-[2.2px]"></span>
                    </div>
                    <div className="flex items-center gap-2">
                        {icon &&
                            React.cloneElement(icon, {
                                className: `text-2xl -translate-y-[1px] ${
                                    isChecked
                                        ? 'text-[#607B96]'
                                        : 'opacity-[0.4] text-[#607B96]'
                                }`,
                            })}
                        <h2
                            className={`fira-code-regular text-[18px] text-[#607B96] ${
                                !isChecked ? 'opacity-[0.9]' : 'text-white'
                            }`}
                        >
                            {label}
                        </h2>
                    </div>
                </label>
            </div>
        )
    }

    const filter = projectsDb.filter((item) =>
        filterArr.includes(item.language)
    )

    const toggleAccordion = () => {
        setAccordionOpen(!accordionOpen)
    }

    useEffect(() => {
        const time = setTimeout(() => {
            setShow(true)
        }, 2000)

        return () => clearTimeout(time)
    }, [])

    return (
        <div className="h-screen pt-[54px] flex overflow-hidden flex-col md:flex-row">
            <div
                className={`border-solid md:border-t-0 border-t-0  md:border-[1px] ${!accordionOpen ? 'border-[0px]' : 'border-[1px]'} md:h-full h-auto pb-5 left-0 min-w-[297.5px] border-[#1E2D3D]`}
            >

                <div
                    className={`cursor-pointer flex py-[6.6px] px-3 border-t-0 border-l-0 border-r-0 items-center gap-2 border-solid border-[1px] border-[#1E2D3D]`}
                    onClick={toggleAccordion}
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
                        Projects
                    </h2>
                </div>

                {accordionOpen && (
                    <div>
                        <CustomCheckbox
                            isChecked={react}
                            disabled={false}
                            setState={setReact}
                            icon={<FaReact />}
                            label={'react'}
                        />
                        <CustomCheckbox
                            isChecked={html}
                            disabled={false}
                            setState={setHtml}
                            icon={<FaHtml5 />}
                            label={'html'}
                        />
                        <CustomCheckbox
                            isChecked={express}
                            disabled={false}
                            setState={setExpress}
                            icon={<SiExpress />}
                            label={'express'}
                        />
                        <CustomCheckbox
                            isChecked={graphql}
                            disabled={false}
                            setState={setGraphql}
                            icon={<GrGraphQl />}
                            label={'graphql'}
                        />
                    </div>
                )}
            </div>
            <div className="border-solid border-[1px] border-t-0 md:border-t-[1px] border-l-0 md:mt-[37px] mt-0 relative h-full pb-40 w-full overflow-auto border-[#1E2D3D]">
                {show ? (
                        <div className="grid grid-cols-1 md:grid-cols:1 place-items-center place-content-center lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 pl-6 md:pr-5 pr-5 gap-8 pt-6  md:pt-12">
                        {filterArr.length !== 0
                            ? filter.map((item, index) => (
                                  <div key={index}>
                                      <div className="mb-[14px] flex gap-4 pl-1">
                                          <h2 className="text-[#5565E8] fira-code-regular text-[16px]">
                                              Projects {item.id}
                                          </h2>
                                          <h3 className="text-[#607B96] text-[16px] fira-code-regular">
                                              {'//'} {item.project_name}
                                          </h3>
                                      </div>
                                      <div
                                          className="max-w-[370px] h-[314px] border-solid bg-[#011221] relative border-[1px] border-[#1E2D3D] rounded-[15px]">
                                          <div className="text-[20px] absolute top-[18px] right-[17px] rounded-sm bg-[#86E1F9] w-[35px] h-[35px]">
                                              <div className="absolute top-2 left-2">
                                                  {React.createElement(item.language_icon)}
                                              </div>
                                          </div>
                                          <img
                                              className="w-full rounded-tl-[15px] border-solid border-b-[1px] border-[#1E2D3D] rounded-tr-[15px] object-cover h-1/2"
                                              src={item.image_link}
                                              alt={item.project_name}
                                          />

                                          <div className="pl-[31px] pt-[24px] pr-5">
                                              <h2 className="text-[#607B96] font-thin fira-code-regular text-[18px]">
                                                  {item.project_description}
                                              </h2>
                                              <Link
                                                  to={item.url}
                                                  target="_blank"
                                                  className="cursor-pointer py-[8px] absolute bottom-4 px-[14px] bg-[#1C2B3A] rounded-md text-white fira-code-regular "
                                              >
                                                  view-project
                                              </Link>
                                          </div>
                                      </div>
                                  </div>
                            ))
                            : projectsDb.map((item, index) => (
                                  <div key={index}>
                                      <div className="mb-[14px] flex gap-4 pl-1">
                                          <h2 className="text-[#5565E8] fira-code-regular text-[16px]">
                                              Projects {item.id}
                                          </h2>
                                          <h3 className="text-[#607B96] text-[16px] fira-code-regular">
                                              {'//'} {item.project_name}
                                          </h3>
                                      </div>
                                      <div
                                          className="max-w-[400px] h-[314px] border-solid relative bg-[#011221] border-[1px] border-[#1E2D3D] rounded-[15px]">
                                          <div
                                              className="text-[20px] absolute top-[18px] right-[17px] rounded-sm bg-[#86E1F9] w-[35px] h-[35px]">
                                              <div className="absolute top-2 left-2">
                                                  {React.createElement(item.language_icon)}
                                              </div>
                                          </div>
                                          <img
                                              className="w-full rounded-tl-[15px] border-solid border-b-[1px] border-[#1E2D3D] rounded-tr-[15px] object-cover h-1/2"
                                              src={item.image_link}
                                              alt={item.project_name}
                                          />

                                          <div className="pl-[31px] pt-[24px] pr-3">
                                              <h2 className="text-[#607B96] font-thin fira-code-regular text-[18px]">
                                                  {item.project_description}
                                              </h2>
                                              <Link
                                                  to={`${item.url}`}
                                                  target="_blank"
                                                  className="cursor-pointer py-[8px] absolute bottom-4 px-[14px] bg-[#1C2B3A] rounded-md text-white fira-code-regular "
                                              >
                                                  view-project
                                              </Link>
                                          </div>
                                      </div>
                                  </div>
                            ))}
                    </div>
                ) : (
                    <div
                        className="grid grid-cols-1 md:grid-cols:1 place-items-center place-content-center lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 pl-4 md:pr-5 pr-5 gap-8  pt-12">
                        {projectsDb.map((item, index) => (
                            <div key={index}>
                                <SkeletonLoader />
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}

export default Pages
