import Header from './components/header/Header'
import ConteudoPrincipal from './components/conteudoPrincipal/ConteudoPrincipal'
import Projetos from './components/projetos/Projetos'
import Experiencias from './components/experiencias/Experiencias'
import Contato from './components/contato/contato'



import './App.css'
import TimeLine from './components/TimeLine/TimeLine'

function App() {

  return (
    <div className="flex flex-col w-fit">
    <Header />
    <div className="flex flex-col">
      <main className="mt-[50px] h-screen  flex items-center justify-center font-poppins ">
        <ConteudoPrincipal />
      </main>

      <Experiencias  />
      <TimeLine />
      <Projetos />
      <Contato />
    </div>
  </div>
  )
}

export default App
