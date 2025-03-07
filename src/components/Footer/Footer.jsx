import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../Logo'

function Footer() {
  return (
    
    <section className="relative pr-1 py-5 bg-gray-400 border border-t-2 border-t-black ">
            <div className="relative z-10 mx-auto max-w-7xl px-4">
                <div className="-m-6 flex flex-wrap ">
                    <div className="w-full p-6 md:w-1/2 lg:w-5/12">
                        <div className="flex h-full flex-col justify-between">
                            <div className="mb-4 inline-flex items-center">
                                <Logo width="100px" />
                            </div>
                            
                        </div>
                    </div>
                    <div className="w-full p-6 md:w-1/2 lg:w-2/12 ">
                        <div className="h-full absolute right-0">
                            <h3 className="tracking-px mb-9  text-xs font-semibold uppercase text-gray-500">
                                About Me 
                            </h3>
                            <ul className='px-5'>
                                <li className="mb-4">
                                    <Link
                                        className=" text-base font-medium text-gray-900 hover:text-gray-700"
                                        to="/about-me"
                                    >
                                        click here
                                    </Link>
                                </li>
                                
                            </ul>
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>
  )
}

export default Footer