import React, { useState } from 'react'
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { AnimatePresence, motion } from 'framer-motion';
const Slider = ({array}) => {

  const [current,setCurrent] = useState(0);  

  const rightClick = () =>{
    if(current < array.length -1){
        setCurrent(prev => prev + 1)
    }
  }  

  const leftClick = () =>{
    if(current > 0){
        setCurrent(prev => prev - 1)
    }
  }  

  

  return (
    <div className=' flex items-center text-white w-11/12 h-1/2 opacity-7 relative'>
      <motion.div
      className={'cursor-pointer z-30 bg-[#0A0A0A] ' + `${current == 0 ? "hidden" : "absolute left-2 "}` }     
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      >
        <FaArrowLeft size={40} onClick={leftClick} />
      </motion.div>
      <AnimatePresence initial={false}>
         <motion.img className='w-[100%] h-[100%] z-10 flex justify-center' 
         src={array[current]} 
         key={array[current]} 
         initial={{ x: 0, opacity: 0 }}
         animate={{ x: 0, opacity: 1 }}
         exit={{ x: 0, opacity: 1 }}
         alt="" />
      </AnimatePresence>
         <motion.div
         whileHover={{ scale: 1.2 }}
         whileTap={{ scale: 0.9 }}
         transition={{ type: "spring", stiffness: 400, damping: 17 }}
         className={'cursor-pointer z-30 bg-[#0A0A0A] '+ `${current == array.length - 1  ? "hidden" : "absolute right-2 "}`}
         >
         <FaArrowRight  size={40} onClick={rightClick}/>
        </motion.div>
    </div>
  )
}

export default Slider