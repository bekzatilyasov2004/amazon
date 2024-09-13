import { useColorMode } from '@chakra-ui/react'
import { Route, Routes } from 'react-router'
import './App.css'
import Cart from './components/Cart'
import Home from './components/Home'
import Login from './components/Login'
import Order from './components/Order'
import Footer from './min-components/Footer'
import Header from './min-components/Header'
import React from 'react'

function App() {
  const { colorMode, setColorMode } = useColorMode();

  React.useEffect(() => {
    setColorMode('light');
  }, [setColorMode]);


  return (
    <div className='body'>
    <Header />
    <Routes>
      <Route path='/'  element={<Home />}/>
      <Route path='/order'  element={<Order />}/>
      <Route path='/login'  element={<Login />}/>
      <Route path='/cart'  element={<Cart />}/>
    </Routes>
    <Footer />
    </div>
  )
}

export default App
