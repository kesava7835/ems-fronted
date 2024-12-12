import { useState } from 'react'

import './App.css'

import ListofEmployess from './components/ListofEmployess'
import Headercomponent from './components/Headercomponent'
import Footercomponet from './components/footercomponet'
import{BrowserRouter, Route, Routes} from 'react-router-dom'
import Employe from './components/Employe'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
        <Headercomponent/>
        
        <Routes>
          <Route path="/" element={<ListofEmployess/>}/>
          <Route path="/employees" element={<ListofEmployess/>}/>
          <Route path="/addEmploye" element={<Employe/>} />
          <Route path="/edit-employe/:id" element={<Employe/>}/>
          
        </Routes>
        <Footercomponet/>
        </BrowserRouter>
      
        
    </>
  )
}

export default App
