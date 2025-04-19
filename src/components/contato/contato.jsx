import React from 'react'
import { MdEmail } from "react-icons/md";
import { MdPhone } from "react-icons/md";
import { BsLinkedin } from "react-icons/bs";
import { motion } from 'framer-motion';

const Contato = () => {

   
  return (

    <motion.div  
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{duration:1,delay:0.5}}
    className='lg:justify-center flex h-[450px]' id='Contato'>
         <div className='animate-fadeIn text-5xl font-bold flex text-white items-center text-center w-[100%]  h-[300px] lg:w-[100%]'>
            <div className='w-[100%] h-auto lg:flex lg:justify-center flex flex-col justify-center items-center lg:mt-[50px] lg:flex-col lg:items-center '>
              <div className='flex items-center justify-center gap-[10px] w-[60%]  h-[60px] px-[10px] mt-[15px] border-solid border-b-2 border-[#FFFFFF05]'>
                  <MdEmail size={30}/>
                  <p className='text-color-cinza-2 text-lg text-center font-medium leading-[1.1] font-thin'> victorolvdev@gmail.com</p>
              </div>
              
              <div className='flex items-center lg:justify-center gap-[10px] w-[60%]  h-[60px] px-[10px] mt-[15px] border-solid border-b-2 border-[#FFFFFF05]'>
                  <MdPhone size={30} />
                  <p className='text-color-cinza-2 text-lg text-center font-medium leading-[1.1] font-thin'>(21) 984730548</p>
              </div>
              <div className='flex items-center lg:justify-center gap-[10px] w-[60%] h-[60px] px-[10px] mt-[15px]'>
                  <BsLinkedin size={30}/>
                  <p className='text-color-cinza-2 text-lg text-center font-medium leading-[1.1] font-thin'><a href="https://www.linkedin.com/in/victorolvdev/" target="_blank"> /victorolvdev</a></p>
              </div>
            </div>
        </div>
    </motion.div>
  )
}

export default Contato