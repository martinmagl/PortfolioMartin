import React from 'react';
import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import Node from '../assets/node.png';
// import FireBase from '../assets/firebase.png';
import GitHub from '../assets/github.png';
import Tailwind from '../assets/tailwind.png';
import Bootstrap from '../assets/Bootstrap.png';
import MySQL from '../assets/mysql.png';
import { useTranslation } from 'react-i18next';

const Skills = () => {
    const [t] = useTranslation('global');

  return (
    <div name='skills' className='w-full h-screen bg-[#0a192f] text-gray-300'>
    {/* Container */}
<div className='max-w--[1000px] mx-auto p-4 flex-col justify-center w-full h-full'>
<div>
    <p className='text-4xl font-bold inline border-b-4 border-[#00b4d8]'>{t("skills.skills")}</p>
    <p className='py-4'>{t("skills.p")}</p>
</div>

<div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
        <img className='w-20 mx-auto' src={HTML} alt="HTML icon" />
        <p className='my-4'>HTML</p>
    </div>
    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
        <img className='w-20 mx-auto' src={CSS} alt="HTML icon" />
        <p className='my-4'>CSS</p>
    </div>
    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
        <img className='w-20 mx-auto' src={JavaScript} alt="HTML icon" />
        <p className='my-4'>JavaScript</p>
    </div>
    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
        <img className='w-20 mx-auto' src={ReactImg} alt="HTML icon" />
        <p className='my-4'>React</p>
    </div>
    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
        <img className='w-20 mx-auto' src={Node} alt="HTML icon" />
        <p className='my-4'>Node</p>
    </div>
    {/* <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
        <img className='w-20 mx-auto' src={FireBase} alt="HTML icon" />
        <p className='my-4'>Firebase</p>
    </div> */}
    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
        <img className='w-20 mx-auto' src={GitHub} alt="HTML icon" />
        <p className='my-4'>Github</p>
    </div>
    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
        <img className='w-20 mx-auto' src={Tailwind} alt="HTML icon" />
        <p className='my-4'>Tailwind</p>
    </div>
    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
        <img className='w-20 mx-auto' src={Bootstrap} alt="Bootstrap icon" />
        <p className='my-4'>Bootstrap</p>
    </div>
    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
        <img className='w-20 mx-auto' src={MySQL} alt="MYSQL icon" />
        <p className='my-4'>MySQL</p>
    </div>
</div>
</div>
    </div>
  )
}

export default Skills