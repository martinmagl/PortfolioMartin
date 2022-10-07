import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'
import { Link } from 'react-scroll'

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>

      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-[#00b4d8] sm:text-2xl'>Hola, mi nombre es</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Martin Esteves</h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>Programador Full Stack.</h2>
        {/* <p className='text-[#8892b0] py-4 max-w-[700px] sm:text-xl'>Soy Programador Web Full Stack, estoy en construccion continua, basandome en la experiencia del usuario. Ademas, soy estudiante de Lic. en Administracion de Empresas,y un entusiasta de las Finanzas</p> */}
        <div>
          <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#00b4d8] hover:border-[#00b4d8]'>
            <Link to="work" smooth={true} duration={500}>
              Ver Trabajos
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