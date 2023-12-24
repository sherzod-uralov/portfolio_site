import { Link, useLocation } from 'react-router-dom'

const Nav = () => {
    const location = useLocation().pathname
    const search = location.split('').filter((e) => e !== '/')
    console.log()
    console.log(search)
    return (
        <nav>
            <div className="flex items-center justify-between px-[20px] border-solid border-[#1E2D3D] border-[1px]">
                <div className="flex items-center gap-[150px]">
                    <h2 className="text-[#607B96] text-[15px] fira-code-regular font-normal">
                        uralov-sherzod
                    </h2>
                    <div className="flex items-center">
                        <div className="relative cursor-pointer">
                            <Link
                                to="/"
                                className={`${
                                    search.length === 0
                                        ? 'text-white'
                                        : 'text-[#607B96]'
                                }  border-solid border-x-[1px] px-[30px] border-[#1E2D3D] py-[15px] text-[15px] fira-code-regular font-normal`}
                            >
                                _hello
                            </Link>
                            {search.length === 0 ? (
                                <span className="bg-[#FEA55F] h-[3px] block w-full absolute -bottom-[15px]"></span>
                            ) : (
                                ''
                            )}
                        </div>
                        <div className="relative cursor-pointer">
                            <Link
                                to="/about"
                                className={`${
                                    location === '/about' ||
                                    location === '/about/'
                                        ? 'text-white'
                                        : 'text-[#607B96]'
                                }  border-solid border-x-[1px] px-[30px] border-[#1E2D3D] py-[15px] text-[15px] fira-code-regular font-normal`}
                            >
                                _about-me
                            </Link>
                            {location === '/about' ? (
                                <span className="bg-[#FEA55F] h-[3px] block w-full absolute -bottom-[15px]"></span>
                            ) : (
                                ''
                            )}
                        </div>
                        <div className="relative cursor-pointer">
                            <span className="text-[#607B96] border-solid border-x-[1px] px-[30px] border-[#1E2D3D] py-[15px] text-[15px] fira-code-regular font-normal">
                                _projects
                            </span>
                        </div>
                    </div>
                </div>
                <h2 className="cursor-pointer text-[#607B96] text-[15px] fira-code-regular font-normal  border-solid border-l-[1px] py-[15px] pl-[23px] border-[#1E2D3D]">
                    _contact-me
                </h2>
            </div>
        </nav>
    )
}

export default Nav
