import Header from './components/header/Header'
import ConteudoPrincipal from './components/conteudoPrincipal/ConteudoPrincipal'
import Projetos from './components/projetos/Projetos'
import Contato from './components/contato/contato'
import './App.css'
import TimeLine from './components/TimeLine/TimeLine'
import Habilidades from './components/habilidades/Habilidades'
import Modal from './components/modal/Modal'
import { useState } from 'react'

function App() {
  
  const [openModal,setOpenModal] = useState(false);
  const [current,setCurrent] = useState(0);
  return (
    <div className={`flex flex-col w-fit relative ${openModal === true ? "overflow-hidden" : "" } ` }>
    <Header />
    <div className="flex flex-col">
      <main className="mt-[50px] h-screen  flex items-center justify-center font-poppins ">
        <ConteudoPrincipal />
      </main>
      {openModal && <Modal setOpenModal={setOpenModal} current={current}/>}
      <Habilidades />
      <TimeLine />
      <Projetos setOpenModal={setOpenModal} setCurrent={setCurrent}/>
      <Contato />
    </div>
  </div>
  )
}

export default App
