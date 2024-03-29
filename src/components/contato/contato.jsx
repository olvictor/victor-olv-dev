import React from 'react'
import { MdEmail } from "react-icons/md";
import { MdPhone } from "react-icons/md";
import { BsLinkedin } from "react-icons/bs";
import { useInView } from 'react-intersection-observer';
const Contato = () => {

   
  return (

    <div  className='lg:justify-center flex h-3/6' id='Contato'>
         <div className='animate-fadeIn text-5xl font-bold text-white items-center text-center w-[100%] mt-[100px] h-[300px] lg:w-[30%]'>
            <h2>Contato</h2>

            <div className='flex items-center gap-[10px] text-center h-[60px] bg-bg-header rounded-xl px-[10px] mt-[15px]'>
                <MdEmail />
                <p className='text-lg'>victorolvdev@gmail.com</p>
            </div>
            
            <div className='flex items-center gap-[10px] text-center h-[60px] bg-bg-header rounded-xl px-[10px] mt-[15px]'>
                <MdPhone />
                <p className='text-lg'>(21) 985491607</p>
            </div>
            <div className='flex items-center gap-[10px] text-center h-[60px] bg-bg-header rounded-xl px-[10px] mt-[15px]'>
                <BsLinkedin />
                <p className='text-lg'><a href="https://www.linkedin.com/in/victorolvdev/" target="_blank"> /victorolvdev</a></p>
            </div>
        </div>
    </div>
  )
}

export default Contato