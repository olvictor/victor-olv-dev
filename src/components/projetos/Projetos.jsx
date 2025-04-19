'use client'
import React, { useState } from 'react'
import projetos from  '../../utils/projetos'
import { motion } from 'framer-motion'
import { IoEyeSharp } from "react-icons/io5";
import { HiArrowTrendingUp } from "react-icons/hi2";


const Projetos = ({setOpenModal,setCurrent}) => {

  const handleClick =(index)=>{
    setCurrent(index)
    setOpenModal(true)
  }

  const [itemActive, setItemActive] = useState(null)
  return (
    <motion.div 
    div id='Projetos' className='h-[1400px] md:h-[auto] h-[auto] mt-8'>
     <div className='flex flex-col gap-[40px] h-[auto] text-center relative'>
            <div className='flex flex-col lg:flex-wrap lg:flex-row flex-wrap justify-start lg:justify-center px-6 lg:gap-6'>
                {projetos.map((projeto,index)=>{
                    return  <div key={index} className='mt-6' onMouseEnter={()=>setItemActive(index)} onMouseLeave={()=>setItemActive(null)}  onClick={()=> handleClick(index)}>
                    <motion.div 
                    whileHover={{ scale: 1.1 }}
                    className='rounded w-[180px] relative py-4  flex items-center justify-between gap-4'>
                        <img className='h-[200px] w-[200px] rounded cursor-pointer' src={projeto.imagens[0]} />
                        <p className='leading-[1.1] lg:hidden font-medium text-left text-2xl text-color-cinza-2'>{projeto.titulo}</p>
                        <HiArrowTrendingUp className="text-color-green z-30 mr-4 cursor-pointer" size={30}/>
                        <IoEyeSharp  fill='#fff' size={100} className={`absolute top-[25%] left-[15%] pointer-events-none ${itemActive == index ? "flex":"hidden"}`}/>
                    </motion.div>
                </div>
                })}
            </div>
        </div>
    </motion.div>

   
  )
}

export default Projetos