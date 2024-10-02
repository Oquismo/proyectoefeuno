import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import { Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import Header from '../components/Header'
import Inicio from '../pages/Inicio'
import '../styles/style2.css'
import Login from '../pages/Login'
import RutaPrivada from "./RutaPrivada";

createRoot(document.getElementById('root')).render(
<>

<Router>
<Header/>

<Suspense fallback={<div>Cargando...</div>}>
<Routes>
  <Route path='/' element={<Inicio/>}/>
  <Route path="/login" element={<Login />} />
  

</Routes>
</Suspense>

</Router>

</>

)
