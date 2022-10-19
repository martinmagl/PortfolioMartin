import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'
import { Link } from 'react-scroll'
import { useTranslation } from 'react-i18next';

const Home = () => {
  const [t] = useTranslation('global');

  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>

      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>{t("home.h1")}</h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>{t("home.h2")}</h2>
        {/* <p className='text-[#8892b0] py-4 max-w-[700px] sm:text-xl'>Soy Programador Web Full Stack, estoy en construccion continua, basandome en la experiencia del usuario. Ademas, soy estudiante de Lic. en Administracion de Empresas,y un entusiasta de las Finanzas</p> */}
        <div>
          <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#00b4d8] hover:border-[#00b4d8]'>
            <Link to="work" smooth={true} duration={500}>
            {t("home.button")}
            </Link>
            <span className='group-hover:rotate-90 duration-300'>
              <HiArrowNarrowRight className='ml-3 ' />
            </span>
          </button>
        </div>
      </div>

    </div>
  )
}

export default Home