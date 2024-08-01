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
    <div className={`flex flex-col w-fit relative h-full bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]`}>
    <Header />
    <div className="flex flex-col">
      <main className="mt-[50px] h-screen  flex items-center justify-center  ">
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
