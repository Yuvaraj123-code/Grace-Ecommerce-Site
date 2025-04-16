import React ,{useState}from 'react'
import Navbar from './Components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Cart from './Pages/Cart/Cart'
import PlaceOrder from './Pages/PlaceOrder/PlaceOrder'
import Footer from './Components/Footer/Footer'
import Loginpopup from './Components/Loginpopup/Loginpopup'
import FoodDisplay from './Components/Fooddisplay/Fooddisplay'


const App = () => {

const [showLogin,setShowLogin] = useState(false)
const [searchTerm, setSearchTerm] = useState("");

  return (
    <>
    {showLogin?<Loginpopup setShowLogin={setShowLogin}/>:<></>}
    <div className='app'>
    <Navbar setShowLogin={setShowLogin} setSearchTerm={setSearchTerm} />
    <Routes>
    <Route path='/' element={<Home searchTerm={searchTerm} />} />
    <Route path='/Cart' element={<Cart/>}/>
      <Route path='/Order' element={<PlaceOrder/>}/>
      {/* <Navbar setShowLogin={setShowLogin} setSearchTerm={setSearchTerm} /> */}
      {/* <FoodDisplay category={category} searchTerm={searchTerm} /> */}
      
     </Routes>
    </div>
    <Footer/>
    </>
  )
}

export default App