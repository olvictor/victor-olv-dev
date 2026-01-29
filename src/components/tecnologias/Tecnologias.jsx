import React from 'react'

const tecs = [
    {
        nome:"Java",
        img:"devicon-java-plain-wordmark",
        desc:''
    },
    {
        nome:"Javascript",
        img:"devicon-javascript-plain",
        desc:''
    },
    {
        nome:"Python",
        img:"devicon-python-plain-wordmark",
        desc:''
    },
    {
        nome:"React",
        img:"devicon-react-original",
        desc:''
    },
    {
        nome:"Springboot",
        img:"devicon-spring-original",
        desc:''
    },
    {
        nome:"NextJS",
        img:"devicon-nextjs-original-wordmark",
        desc:''
    }
]

const Tecnologias = () => {
  return (
    <div className='flex flex-wrap gap-8 items-center justify-center mt-6'>
            {tecs.map((tec,index)=>{
                return <div key={index} className='flex bg-color-orange hover:opacity-75  rounded-xl gap-4 items-center w-[30%] h-[80px] px-2'>  
                    <i className={`${tec.img} text-white text-6xl`}></i>
                    <p className='text-color-white leading-[1.2] tracking-tighter font-thin font-bold'>{tec.nome}</p>

                </div>
            })}
    </div>
  )
}

export default Tecnologias