import React from 'react'



const About = () => {
    return (
        <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
            <div className='flex flex-col justify-center items-center w-full h-full'>
                <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                    <div className='sm:text-right pb-8 pl-4'>
                        <p className='text-4xl font-bold inline border-b-4 border-[#00b4d8]'>Sobre Mi</p>
                    </div>
                </div>
                <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                    <div className='sm:text-right text-4xl font-bold'>
                        <p>Soy Martin, un gusto</p>
                    </div>
                    <div>
                        <p>Soy Programador Web Full Stack, estoy en construccion continua, basandome en la experiencia del usuario. Ademas, soy estudiante de Lic. en Administracion de Empresas,y un entusiasta de las Finanzas.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About