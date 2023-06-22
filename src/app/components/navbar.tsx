import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { AiOutlineDownload } from 'react-icons/ai';
import Contact from './contact';

const Navbar = () => {
    return (
        <div className='z-50 sticky top-0'>

            <header className="text-black-800 body-font">
                <div className="pt-4 pb-4 pl-2 bg-blue-300 w-full container 
                mx-auto flex flex-wrap p-5 flex-col md:flex-row 
                items-cstrokeLinecapenter">
                    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                        <span className="font-myFont text-red-800 text-4xl">Engr. Junaid Jahangir Qazi

                        </span>
                    </a>


                    <nav className=" md:ml-auto flex flex-wrap items-center text-base justify-center mr-10">
                        <Link href='./' className="mr-3 hover:text-red-600">Home</Link>
                        <Link href={'#About'} className="mr-3 hover:text-red-600">About</Link>
                        <Link href={'#skills'} className="mr-3 hover:text-red-600">Skills</Link>
                        <Link href={'#Project'} className="mr-3 hover:text-red-600">Projects</Link>
                        <Link href={'#Contact'} className="mr-3 hover:text-red-600">Contact</Link>
                    </nav>
                    <button className=" pl-2 cursor-pointer inline-flex items-center bg-blue-400 border-0 py-1 px-3 focus:outline-none hover:bg-red-600 rounded text-base mt-4 md:mt-0">
                    <a className='flex flex-shrink-0' href='../../assets/my CV/CV - DS - New Style - Junaid Jahangir Qazi - 12-03-23.docx'>
                            Download CV
                            <AiOutlineDownload className='text-xl ml-2'/>
                    </a>
                    </button>
                    
                    <br/>

                </div>
            </header>

        </div>
    )
}
export default Navbar