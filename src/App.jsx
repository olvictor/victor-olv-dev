import './App.css'
import Header from './components/header/Header'
import TextoComSub from './components/textoComSub/TextoComSub'
import Perfil from './components/perfil/Perfil'
import Estatisticas from './components/Estatisticas/Estatisticas'
import Destaques from './components/destaques/Destaques'
import { SlBookOpen } from "react-icons/sl";
import Projetos from './components/projetos/Projetos'
import TimeLine from './components/TimeLine/TimeLine'

import Contato from './components/contato/contato'
import Modal from './components/modal/Modal'

import Tecnologias from './components/tecnologias/Tecnologias'
import { useState } from 'react'




function App() {
  const [openModal,setOpenModal] = useState(false);

  const [current,setCurrent] = useState(0);

  
  return (
    <div className={`w-screen min-h-screen h-auto bg-bg-black px-2 overflow-x-hidden`}>
      <Header />
      {openModal && <Modal setOpenModal={setOpenModal} current={current}/>}
      <main className='lg:grid grid-cols-[8fr_12fr] pt-[8rem] overflow-x-hidden'>
        <section className='lg:sticky h-auto justify-items-center overflow-x-hidden'>
          <div className='w-full flex justify-center lg:justify-end lg:mr-36'>
            <Perfil />
          </div>
        </section>
        <div className='text-center flex flex-col overflow-y-auto  lg:h-[calc(100vh-8rem)] lg:pr-[20%] gap-16'>
          <TextoComSub  principal={"SOFTWARE"} sub={"ENGINEER"}/>
          <span className='italic font-extralight text-lg leading-[1.4] text-font-gray px-6 mt-6 text-center'>
          Apaixonado por criar experiências intuitivas e envolventes para o usuário. Especialista em transformar ideias em produtos primorosamente elaborados.</span> 
          
          <div className='flex items-center w-full justify-center gap-8 lg:gap-2'>
            <Estatisticas principal={2} subtext={"Anos de Estudo"} />
            <Estatisticas principal={8} subtext={"Projetos Realizados"} />
            <Estatisticas principal={2} subtext={"Bootcamps Realizados"} />
          </div>
          <TextoComSub  principal={"EXPERIÊNCIA EM"} sub={"CURSOS"}/>
          <TimeLine />
          <section className='flex flex-col px-2 gap-6 mt-8'>
        <div className='lg:flex-row flex flex-col gap-4'>
        <Destaques  cor={"bg-color-orange"} icon={<SlBookOpen size={40} color='white' />} text={"dynamic animation,motion design"} textColor={"white"}/>
        <Destaques  cor={"bg-color-green"} icon={<SlBookOpen size={40} color='black' />} text={"dynamic animation,motion design"} textColor={"black"}/>
        </div>
      </section>
        <div>
        <TextoComSub  principal={"PROJETOS"} sub={"RECENTES"}/>
        </div>
        <Projetos setOpenModal={setOpenModal} setCurrent={setCurrent}/>

        <TextoComSub  principal={"TECNOLOGIAS &"} sub={"LINGUAGENS"}/>
        <Tecnologias />
        <TextoComSub  principal={"VAMOS TRABALHAR"} sub={"JUNTOS"}/>
        <Contato />
          </div>
      </main>
  </div>
  )
}
export default App
