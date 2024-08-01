import React from 'react'
import { MdEmail } from "react-icons/md";
import { MdPhone } from "react-icons/md";
import { BsLinkedin } from "react-icons/bs";
import { motion } from 'framer-motion';

const Contato = () => {

   
  return (

    <motion.div  className='lg:justify-center flex h-[450px]' id='Contato'>
         <div className='animate-fadeIn text-5xl font-bold text-white items-center text-center w-[100%] mt-[100px] h-[300px] lg:w-[100%]'>
            <h2>Contato</h2>
            <div className='w-[100%] h-auto lg:flex lg:justify-center lg:mt-[50px] lg:flex-col lg:items-center '>
              <div className='flex items-center justify-center gap-[10px] w-[60%]  h-[60px] px-[10px] mt-[15px] border-solid border-b-2 border-[#FFFFFF05]'>
                  <MdEmail size={30}/>
                  <p className='text-lg'> victorolvdev@gmail.com</p>
              </div>
              
              <div className='flex items-center lg:justify-center gap-[10px] w-[60%]  h-[60px] px-[10px] mt-[15px] border-solid border-b-2 border-[#FFFFFF05]'>
                  <MdPhone size={30} />
                  <p className='text-lg'>(21) 985491607</p>
              </div>
              <div className='flex items-center lg:justify-center gap-[10px] w-[60%] h-[60px] px-[10px] mt-[15px]'>
                  <BsLinkedin size={30}/>
                  <p className='text-lg'><a href="https://www.linkedin.com/in/victorolvdev/" target="_blank"> /victorolvdev</a></p>
              </div>
            </div>
        </div>
    </motion.div>
  )
}

export default Contato