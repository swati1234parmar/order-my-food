import { useEffect, useState } from "react"
import FoodData from "../data/FoodData";
import { useDispatch, useSelector } from "react-redux";
import { setCategory } from "../redux/slices/categorySlice";

const CategoryMenu = () => {
  const [categories, setCategories] = useState([]);
const dispatch = useDispatch()
const selectedCategory = useSelector(state => state.category.category)

  const ListOfUniCategories = () => {
    const uniqueCategry = [...new Set(FoodData.map(food => food.category))];
    setCategories(uniqueCategry)
  }

  useEffect(() => {
    ListOfUniCategories()
  }, [])



  return (
    <div className="mt-4">
      <h6 className="font-semibold text-2xl mb-10">Find the best food</h6>
      <div className="flex gap-4 overflow-x-scroll lg:overflow-x-hidden">
      <button
        className={`p-2 hover:bg-green-400 bg-gray-200 rounded-md border text-2xl  ${selectedCategory === "All" && 'bg-green-400 text-white'}`} 
        onClick={() => dispatch(setCategory("All"))}
      >
        All
        </button>
        {categories.map((category, index) => 
        <button
        key={index}
        onClick={() => dispatch(setCategory(category))}
         className={`p-2 hover:bg-green-400 bg-gray-200 rounded-md border text-2xl ${selectedCategory === category && 'bg-green-400 text-white'}`} 
         >
        {category}
         </button>
        )}
      </div>
      </div>
  )
}

export default CategoryMenu

