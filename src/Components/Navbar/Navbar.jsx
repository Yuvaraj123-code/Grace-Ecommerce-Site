import React, { useContext, useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'
import { StoreContext } from '../../Context/StoreContext'


const Navbar = ({setShowLogin,setSearchTerm}) => {

  const[menu,setMenu] = useState("menu");

  const{getTotalCartAmount} = useContext(StoreContext)

  const [localSearch, setLocalSearch] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchTerm(localSearch); // Pass search term to parent
    // setLocalSearch(""); // Clear input after search
  };

  return (
    <div className='Navbar'>
        
    <Link to='/'><img src={assets.headerlogo}  alt='' className='logo'/></Link>
    <ul className="Navbar-menu">
        <Link to='/' onClick={()=>setMenu("Home")}  className={menu=="Home"?"active":""}>Home</Link>
        <a href='#explore-menu' onClick={()=>setMenu("Menu")} className={menu=="Menu"?"acive":""}>Products</a>
        <a href='#app-download' onClick={()=>setMenu("Mobile-App")} className={menu=="Mobile-App"?"active":""}>Mobile-App</a>
        <a href='#footer' onClick={()=>setMenu("Contact-us")} className={menu=="Contact-us"?"active":""}>Contact-us</a>
    </ul>

<div className='navbar-right'>
<form onSubmit={handleSearch} className="navbar-search">
        <input 
          type="text" 
          placeholder="Search products..." 
          value={localSearch}
          onChange={(e) => setLocalSearch(e.target.value)}
        />
        <button type="submit">
          <img src={assets.search_icon} alt="Search"/>
        </button>
      </form>
<div className='navbar-search-icon'>
   <Link to='/cart'> <img src={assets.basket_icon} alt=''/></Link>
    <div className={getTotalCartAmount()===0?"":"dot"}></div>
</div>
<button onClick={()=>setShowLogin(true)}>Sign in</button>
</div>

    </div>
  )
}

export default Navbar