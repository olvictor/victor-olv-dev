import React from 'react'

const ConteudoPrincipal = () => {
  return (
    <div className="flex flex-col gap-[30px] lg:w-[70%]" id='Início'>
          <h1 className="animate-textShadow text-white text-5xl font-bold text-center lg:text-8xl">Desenvolvedor de Software<strong className="bg-gradient-to-r from-purple-500 via-blue-500 to-green-500 text-transparent bg-clip-text"> Full Stack </strong></h1>
          <p className="animate-fadeIn text-font-gray indent-2.5 text-center lg:text-xl">
            Desenvolvedor de Software em busca de crescimento profissional e aprimoramento contínuo. Iniciei minha jornada na programação em 2022 e desde então tenho mergulhado no mundo tecnológico com uma curiosidade insaciável, sempre buscando aprender e evoluir.
          </p>
          <p className="animate-fadeIn text-font-gray indent-2.5 text-center lg:text-xl">Meus conhecimentos abrangem tecnologias front e backend , como JavaScript, React , Node, Mysql, permitindo-me criar interfaces robustas, atraentes e interativas.</p>
          <div className="flex gap-[20px] items-center w-[100%]  items-center justify-center">
            <button className="animate-slideInLeft bg-white h-14 p-[10px] w-[180px] rounded-3xl font-bold hover:border-2 hover:border-bg-header">
            <a href="mailto:victorolvdev@gmail.com" target="_blank">Entrar em Contato</a>
            </button>
            <button className="animate-slideInRight bg-bg-header h-14 p-[10px] w-[180px] rounded-3xl text-white border-white border-solid	border-2 font-bold">
              <a href="https://drive.google.com/drive/folders/1g_Q4ExjuA4qy0MBYMqlmzJeXkJb94bdf" target="_blank">Download CV</a>
            </button>
          </div>
    </div>
  )
}

export default ConteudoPrincipal