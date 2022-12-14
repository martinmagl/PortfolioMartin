import React, { useState } from 'react'
import { FaBars, FaTimes, FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import Logo from '../assets/logo.png'
import { Link } from 'react-scroll'
import Resume from '../assets/CV-MartinEsteves.pdf'
import { useTranslation } from 'react-i18next';


const Navbar = () => {

    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)
    const [dropdownOpen, setdropdownOpen] = useState(false);
    const [t, i18n] = useTranslation('global');

    return (
        <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#060d18] text-gray-300'>
            <div>
                <a href="/" ><img src={Logo} alt='Logo' style={{ width: '75px' }} /></a>
            </div>

            {/* menu */}
            <div className="hidden md:flex">
                <ul className="hidden md:flex">
                    <li className='text-xl hover:border-b-2 rounded-full'>
                        <Link to="home" smooth={true} duration={500}>
                            {t("navbar.home")}
                        </Link>
                    </li>
                    <li className='text-xl hover:border-b-2 rounded-full'>
                        <Link to="about" smooth={true} duration={500}>
                            {t("navbar.about")}
                        </Link>
                    </li>
                    <li className='text-xl hover:border-b-2 rounded-full'>
                        <Link to="skills" smooth={true} duration={500}>
                            {t("navbar.skills")}
                        </Link>
                    </li>
                    <li className='text-xl hover:border-b-2 rounded-full'>
                        <Link to="work" smooth={true} duration={500}>
                            {t("navbar.work")}
                        </Link>
                    </li>
                    <li className='text-xl hover:border-b-2 rounded-full'>
                        <Link to="contact" smooth={true} duration={500}>
                            {t("navbar.contact")}
                        </Link>
                    </li>
                </ul>
            </div>

            <div>
             {/* cuando quiero que me aparezca el boton para cambiar los idiomas  */}

                {/* <div
                    onClick={() => setdropdownOpen(!dropdownOpen)}
                    className="hover:cursor-pointer border-2 text-white font-bold py-2 px-4 rounded-full">
                    {t("navbar.idioma")}
                </div> */}
                <div className={`${dropdownOpen ? `top-13` : ' invisible opacity-0'} absolute `}>
                    <ul>
                        <li><button className='hover:border-b-2' onClick={() => i18n.changeLanguage('es')}>ES</button></li>
                        <li><button className='hover:border-b-2' onClick={() => i18n.changeLanguage('en')}>EN</button></li>
                    </ul>
                </div>
            </div>

            {/* Hamburger */}

            <div onClick={handleClick} className="md:hidden z-10">
                {!nav ? <FaBars /> : <FaTimes />}
            </div>

            {/* Mobile Menu */}
            <div>
                <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
                    <li className="py-6 text-4xl">
                        <Link onClick={handleClick} to="home" smooth={true} duration={500}>
                            Inicio
                        </Link>
                    </li>
                    <li className="py-6 text-4xl">
                        <Link onClick={handleClick} to="about" smooth={true} duration={500}>
                            Sobre Mi
                        </Link>
                    </li>
                    <li className="py-6 text-4xl">
                        <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
                            Habilidades
                        </Link>
                    </li>
                    <li className="py-6 text-4xl">
                        <Link onClick={handleClick} to="work" smooth={true} duration={500}>
                            Experiencia
                        </Link>
                    </li>
                    <li className="py-6 text-4xl">
                        <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
                            Contacto
                        </Link>
                    </li>
                </ul>
            </div>
            {/*Social Icons*/}
            <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
                <ul>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600 '>
                        <a className='flex justify-between items-center w-full text-gray-300'
                            href='https://www.linkedin.com/in/martinmagl/'>
                            LinkedIn  <FaLinkedin size={30} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#db7777] '>
                        <a className='flex justify-between items-center w-full text-gray-300'
                            href='https://www.instagram.com/martinmagl/'>
                            Instagram  <FaInstagram size={30} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333] '>
                        <a className='flex justify-between items-center w-full text-gray-300'
                            href='https://github.com/martinmagl'>
                            Github <FaGithub size={30} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6FC2B0] '>
                        <a className='flex justify-between items-center w-full text-gray-300'
                            href='mailto:meprogramador@gmail.com'>
                            Email <HiOutlineMail size={30} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565F69] '>
                        <a className='flex justify-between items-center w-full text-gray-300'
                            href={Resume} download>
                            {t("navbar.cv")} <BsFillPersonLinesFill size={30} />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar