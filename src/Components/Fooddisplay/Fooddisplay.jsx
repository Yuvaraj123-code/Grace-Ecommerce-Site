import React, { useContext, useMemo } from 'react'
import  './Fooddisplay.css'
import { StoreContext } from '../../Context/StoreContext'
import FoodItem from '../FoodItem/FoodItem'




const Fooddisplay = ({category,searchTerm})=>{




    const{food_list} = useContext(StoreContext)

    const filteredItems = useMemo(() => {
      return food_list.filter((item) => {
        const matchesCategory = category === "All" || category === item.category;
        const matchesSearch = !searchTerm || 
          item.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
          item.description.toLowerCase().includes(searchTerm.toLowerCase());
        
        return matchesCategory && matchesSearch;
      });
    }, [food_list, category, searchTerm]);
    
  return (
    <div className='food-display' id='food-display'>
    <h2>Top Products near you</h2>
    <div className="food-display-list">
      {filteredItems.length > 0 ? (
        filteredItems.map((item) => (
          <FoodItem 
            key={item._id} 
            id={item._id}
            name={item.name}
            description={item.description}
            price={item.price}
            image={item.image}
          />
        ))
      ) : (
        <p className="no-results">
          {searchTerm 
            ? `No products found matching "${searchTerm}"`
            : "No products available"}
        </p>
      )}
    </div>
  </div>
  )
}

export default Fooddisplay