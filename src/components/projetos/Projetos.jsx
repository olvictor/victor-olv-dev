'use client'
import React from 'react'
import projetos from  '../../utils/projetos'


const Projetos = ({setOpenModal,setCurrent}) => {
  const handleClick =(index)=>{
    setCurrent(index)
    setOpenModal(true)
  }

  return (
    <div id='Projetos' className='h-[1400px] md:h-[600px]'>
     <div className='animate-fadeIn flex flex-col gap-[40px] h-[auto] text-center relative mt-[50px] '>
        <div className="absolute top-[70px] left-0 w-full h-[1px] bg-bg-header z-10 "></div>

            <h2 className='text-5xl font-bold text-white'>Projetos</h2>

            <div className='flex flex-col lg:flex lg:flex-row flex-wrap	justify-center items-center gap-[30px] mt-[200px]'>

                {projetos.map((projeto,index)=>{
                    return  <div key={index} className='flex flex-col items-center' onClick={()=> handleClick(index)}>
                    <div className='rounded-1xl h-[300px] w-[300px] lg:w-[400px] border-solid border-b-2 border-white/[.15]	py-4'>
                        <img className='h-full w-[100%] hover:opacity-85 cursor-pointer' src={projeto.imagens[0]} />
                    </div>
                </div>
                })}
            </div>
        </div>
    </div>

   
  )
}

export default Projetos