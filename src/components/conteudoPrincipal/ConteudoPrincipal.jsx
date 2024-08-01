import React from 'react'
import { motion } from "framer-motion"
const ConteudoPrincipal = () => {

  const container = (delay) => ({
    hidden: {x:-100, opacity:0},
    visible: {
      x:0,
      opacity:1,
      transition:{
        duration:0.5,delay:delay
      },
    }
  })


  return (
    <div className="flex flex-col gap-[30px] lg:w-[70%]" id='Início'>
          <motion.h1
          variants={container(0.5)}
          initial="hidden"
          animate="visible"
          className="animate-textShadow text-white text-5xl font-bold text-center lg:text-8xl ">Desenvolvedor de Software<strong className="bg-gradient-to-r from-purple-500 via-blue-500 to-green-500 text-transparent bg-clip-text"> Full Stack </strong></motion.h1>
          <motion.p 
           variants={container(1)}
           initial="hidden"
           animate="visible"
          className=" text-font-gray indent-2.5 text-center lg:text-2xl">
            Desenvolvedor de Software em busca de crescimento profissional e aprimoramento contínuo. Iniciei minha jornada na programação em 2022 e desde então tenho mergulhado no mundo tecnológico com uma curiosidade insaciável, sempre buscando aprender e evoluir.
            Meus conhecimentos abrangem tecnologias front e backend , como JavaScript, React , Node, Mysql, permitindo-me criar interfaces robustas, atraentes e interativas.
          </motion.p>
          <motion.div 
          variants={container(1.5)}
          initial="hidden"
          animate="visible"
          className="flex gap-[20px] items-center w-[100%]  items-center justify-center">
            <motion.button 
             whileHover={{ scale: 1.1 }}
             transition={{ type: "spring", stiffness: 400, damping: 10 }}
             className=" h-14 bg-[rgba(0,128,255,255)] p-[10px] w-[180px] text-white rounded-3xl font-bold border-2">
             <a href="mailto:victorolvdev@gmail.com" target="_blank">Entrar em Contato</a>
            </motion.button>
            <motion.button 
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            className="animate-slideInRight  h-14 p-[10px] w-[180px] rounded-3xl text-white border-white border-solid	border-2 font-bold">
              <a href="https://drive.google.com/drive/folders/1g_Q4ExjuA4qy0MBYMqlmzJeXkJb94bdf" target="_blank">Download CV</a>
            </motion.button>
          </motion.div>
    </div>
  )
}

export default ConteudoPrincipal