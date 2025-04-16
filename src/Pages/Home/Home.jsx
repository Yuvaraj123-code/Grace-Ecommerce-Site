import React ,{useState}from 'react'
import './Home.css'
import Header from '../../Components/Header/Header'
import ExploreMenu from '../../Components/ExploreMenu/ExploreMenu'
import Fooddisplay from '../../Components/Fooddisplay/Fooddisplay'
import AppDownload from '../../Components/AppDownload/AppDownload'

const Home = ({searchTerm}) => {

    const[category,setCategory] = useState("All")
  return (
    <div>
        <Header/>
        <ExploreMenu category={category} setCategory={setCategory}/>
        <Fooddisplay category={category} searchTerm={searchTerm} />
        <AppDownload/>
    </div>
  )
}

export default Home