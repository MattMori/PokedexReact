import { Routes, Route } from "react-router-dom";
import Header from './assets/components/header/Header'
import ListPokemon from "./assets/pages/ListPokemon";
import PokeInfo from './assets/pages/PokeInfo'

function App() {
   

  return (
    <div className="App">
    <Header />
      <Routes>
        <Route path="/" element={<ListPokemon/>} />
        <Route path="/pokemon/:id" element={<PokeInfo />} />  
        </Routes>
    </div>
  )
}

export default App
