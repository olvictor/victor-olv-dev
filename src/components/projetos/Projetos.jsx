'use client'
import React, { useState } from 'react'
import projetos from  '../../utils/projetos'
import { motion } from 'framer-motion'
import { IoEyeSharp } from "react-icons/io5";

const Projetos = ({setOpenModal,setCurrent}) => {
  const handleClick =(index)=>{
    setCurrent(index)
    setOpenModal(true)
  }

  const [itemActive, setItemActive] = useState(null)

  return (
    <motion.div 
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{duration:1,delay:0.5}}
    div id='Projetos' className='h-[1400px] md:h-[auto] h-[auto]'>
     <div className='flex flex-col gap-[40px] h-[auto] text-center relative mt-[50px] '>
            <h2 className='text-5xl font-bold text-white'>Projetos</h2>
            <div className='flex flex-col lg:flex lg:flex-row flex-wrap	justify-center items-center gap-[30px] mt-[200px]'>
                {projetos.map((projeto,index)=>{
                    return  <div key={index} className='flex flex-col items-center drop-shadow-custom shadow-2xl' onMouseEnter={()=>setItemActive(index)} onMouseLeave={()=>setItemActive(null)}  onClick={()=> handleClick(index)}>
                    <motion.div 
                    whileHover={{ scale: 1.1 }}
                    className='rounded-1xl h-[300px] w-[300px] lg:w-[400px] relative py-4'>
                        <img className='h-full w-[100%] rounded-2xl cursor-pointer' src={projeto.imagens[0]} />
                        <IoEyeSharp  fill='#fff' size={100} className={`absolute top-[35%] left-[35%] pointer-events-none ${itemActive == index ? "flex":"hidden"}`}/>
                    </motion.div>
                </div>
                })}
            </div>
        </div>
    </motion.div>

   
  )
}

export default Projetos