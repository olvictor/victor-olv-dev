import React, { useState } from 'react'
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

const Slider = ({array}) => {
  console.log(array)
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
    <div className=' flex items-center text-white w-11/12 h-1/2 opacity-7 bg-red-400 relative'>
        <FaArrowLeft className={'cursor-pointer z-30 bg-[#0A0A0A] ' + `${current == 0 ? "hidden" : "absolute left-2 "}` } size={40} onClick={leftClick} />
         <img className='w-[100%] h-[100%] z-10 flex justify-center' src={array[current]} alt="" />
        <FaArrowRight className={'cursor-pointer z-30 bg-[#0A0A0A] '+ `${current == array.length - 1  ? "hidden" : "absolute right-2 "}`} size={40} onClick={rightClick}/>
    </div>
  )
}

export default Slider