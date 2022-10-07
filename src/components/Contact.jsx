import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4 '>
<form method='POST' action='https://getform.io/f/98c03026-b6f2-4d51-aacd-81e7d1873231' className='flex flex-col max-w-[600px] w-full'>
<div className='pb-8'>
    <p className='text-4xl font-bold inline border-b-4 border-[#00b4d8] text-gray-300'>
        Contacto
    </p>
    <p className='text-gray-300 py-4 text-xl'>
        {/* Enviar mensaje a correo electronico - meprogramador@gmail.com */}
        Cualquier consulta, duda o recomendacion, enviame un mensaje.
    </p>
</div>
<input className='bg-[#ccd6f6]' type='text' placeholder='Nombre*' name='Nombre' />
<input className='my-4 p-2 bg-[#ccd6f6]' type='email' placeholder='Email*' name='Email' />
<textarea name='message' rows='10' className='bg-[#ccd6f6] p-2' placeholder='Mensaje'></textarea>
<button className='text-white border-2 hover:bg-[#00b4d8] hover:border-[#00b4d8] px-4 py-3 my-8 mx-auto flex items-center'> Enviar </button>
</form>
    </div>
  )
}

export default Contact