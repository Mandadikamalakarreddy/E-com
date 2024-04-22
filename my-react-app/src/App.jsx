
import './App.css'
import CategoryDetails from './Components/CategoryDetails/CategoryDetails'
import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header'
import Navbar from './Components/Navbar/Navbar'
import Cart from './Components/Cart/Cart'
import { useState } from 'react'

import { Routes,Route } from 'react-router-dom'



function App() {

  const [cartItems, setCartItems] = useState([]);


  const addToCart = (productName, price, image) => {
    const newCartItem = { productName, price, image };
    setCartItems([...cartItems, newCartItem]);
  };

  return (
    <>
    
  <div className='app'>
  <Navbar/>
  <Routes>
      <Route path="/" element={<Header />}/>
      <Route path='/category/:catName' element={<CategoryDetails  addToCart={addToCart}/>} />
      <Route path="/cart" element={<Cart cartItems={cartItems} />} />
            <Route path="*" element={<h1>404 Not Found</h1>}/>
    </Routes>
  <Footer/>
  </div>
 
    </>
  )
}

export default App
