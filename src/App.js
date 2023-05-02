import React from 'react'
import {HashRouter,Routes,Route} from 'react-router-dom'
import Home from './Pages/Home'
import Salon from './Pages/Salon'
import HomeMakeUp from './Pages/HomeMakeUp'
import FemaleSpa from './Pages/FemaleSpa'
import LedFacial from './Pages/LedFacial'
import HairSalon from './Pages/HairSalon'
import Waxing from './Pages/Waxing'

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/Salon' element={<Salon/>}></Route>
        <Route path='/HomeMakeUp' element={<HomeMakeUp/>}></Route>
        <Route path='/FemaleSpa' element={<FemaleSpa/>}></Route>
        <Route path='/LedFacial' element={<LedFacial/>}></Route>
        <Route path='/HairSalon' element={<HairSalon/>}></Route>
        <Route path='/Waxing' element={<Waxing/>}></Route>
      </Routes>
    </HashRouter>
  )
}

export default App
