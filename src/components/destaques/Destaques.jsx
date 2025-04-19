import React from 'react'
import { BsBoxArrowInRight } from "react-icons/bs";

const Destaques = ({cor,icon,text,textColor}) => {
  return (
    <div className={`${cor} w-full flex flex-col h-64 hover:opacity-75 rounded p-6 gap-6 justify-center`}>
            {icon}
            <h4 className={`leading-[1.1] font-medium text-left text-2xl text-${textColor}`}>{text}</h4>
            <BsBoxArrowInRight  className='cursor-pointer self-end' size={40} color={textColor}/>
    </div>
  )
}

export default Destaques