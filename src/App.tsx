import Cabecalho from './components/Cabecalho'
import Header from './components/Cabecalho'
import Hero from './components/Hero'
import ListaVagas from './containers/ListaVagas'
import Vaga from './components/Vaga'

import './global.css'

function App() {
  return (
    <>
      <Cabecalho>Danilo Jobs</Cabecalho>
      <Hero>As melhores vagas para tecnologia, design e artes visuais.</Hero>
      <div className="container">
        <ListaVagas />
      </div>
    </>
  )
}

export default App
