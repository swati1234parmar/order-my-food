import FoodCards from "./FoodCards"
import toast, { Toaster } from 'react-hot-toast';
import { useSelector } from "react-redux";
import FoodData from "../data/FoodData";

const FoodItems = () => {
  const category = useSelector(state => state.category.category)
  const search = useSelector(state => state.search.search)

  const filteredFoodData = FoodData.filter((food) => {
    if (category === "All") {
      return food.name.toLowerCase().includes(search.toLowerCase()); 
    } else {
      return category === food.category && food.name.toLowerCase().includes(search.toLowerCase())
    }
  });
  
  const handleToast = (name) => toast.success(`Added ${name} to cart`);
  return (
    <div>
      <Toaster position="top-center" reverseOrder={false}/>
      <FoodCards filteredFoodData={filteredFoodData} handleToast={handleToast}/> 
    
    </div>
  )
}

export default FoodItems

