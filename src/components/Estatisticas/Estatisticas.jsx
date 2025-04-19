import React from 'react'

const Estatisticas = ({principal,subtext}) => {
  return (
    <div className='flex flex-col text-center font-semibold w-1/4 mt-6'>
        <h4 className='text-6xl text-color-white leading-[1.2] tracking-[-.01em]'>+{principal}</h4>
        <span className='text-lg text-color-cinza-1 font-thin leading-[1.2] tracking-[-.01em]'>{subtext}</span>
    </div>
  )
}

export default Estatisticas