
import './App.css'
import { Barra } from  './components/Barra'
import { Perfil } from './components/Perfil'
import { Body } from './components/Body'
import { Formulario } from './components/Contacto'
import { Informacion } from './components/Informacion'
import { Aboutme } from './components/Aboutme'
import { Progress } from './components/Progress' 
import { About, Contact, Projects, Home } from './pages'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import { PieDePagina } from './components/Footer'






function App() {

  return (
    <div className="App">


    <BrowserRouter>
      <Barra />
        <Routes>
           <Route path='/'/>
           <Route path='/about' element={<About />}/>
           <Route path='/contact' element={<Contact />}/>
           <Route path='/projects' element={<Projects />}/>
           
        </Routes>
    </BrowserRouter>

    
    
    <Perfil />
    <Progress/ >
    <Body />
    <Informacion />
    <Aboutme />
    <Formulario />
    <PieDePagina />
    
    
    
    
      
    </div>
  )
}

export default App
