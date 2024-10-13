import { useDispatch } from "react-redux"
import { setSearch } from "../redux/slices/searchSlice"

const Navbar = () => {

    const dispatch = useDispatch();
    const fullDate = new Date()
    const date = fullDate.toDateString()
    


  return (
    <nav className="lg:flex lg:flex-row justify-between">
            <div className="">
                <div><h1 className="font-semibold text-2xl text-gray-600">{date}</h1></div>
                <div><h5 className="text-2xl text-gray-600">Flavoro Foods</h5></div>
            </div>
            <div className="">
                <input 
                    type="search"
                    name="search"
                    placeholder="Search here..."
                    className="bg-white outline-none border-2 border-gray-400 p-2 lg:p-4 rounded-lg lg:w-[400px] w-full md:width-[100px] mt-4"
                    onChange={(e) => dispatch(setSearch(e.target.value))}
                    autoComplete="off"
                />
            </div>
    </nav>  
  )
}

export default Navbar
