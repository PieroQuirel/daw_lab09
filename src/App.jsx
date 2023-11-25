import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Inicio from './pages/Inicio.jsx'
import MainHeader from './common/MainHeader.jsx'
import MainNav from './common/MainNav.jsx'
import MainFooter from './common/MainFooter.jsx'
import './App.css'
import Clientes from './pages/Clientes.jsx'

function App() {
    return (
        <>
            <BrowserRouter>
                <MainHeader />
                <MainNav />
                <Routes>
                    <Route path='/' element={<Inicio/>}/>
                    <Route path='/clientes' element={<Clientes/>}/>
                </Routes>
                <MainFooter />
            </BrowserRouter>

        </>
    );
}

export default App
