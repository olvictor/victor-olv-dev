import './App.css'
import Header from './components/header/Header'
import TextoComSub from './components/textoComSub/TextoComSub'


function App() {
  return (
    <div className={`w-screen h-screen bg-bg-black`}>
      <Header />
      <main className='md:grid grid-cols-[8fr_12fr] py-[8rem]'>
        <section className='bg-red-400 h-auto'>
          <div className=''>
            <h3>aaa</h3>
          </div>
        </section>
        <div className=''>
          <TextoComSub  principal={"SOFTWARE"} sub={"ENGINEER"}/>
        </div>
      </main>
  </div>
  )
}
export default App
