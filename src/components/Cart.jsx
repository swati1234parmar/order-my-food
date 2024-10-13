import { IoIosClose } from "react-icons/io";
import ItemCard from "./ItemCard";
import { useSelector } from "react-redux";
import { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { useNavigate } from "react-router-dom"

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cart)
  const totalQty = cartItems.reduce((totalQty, item) => totalQty + item.qty, 0)
  const totalAmount = cartItems.reduce((totalAmt, item) => totalAmt + item.qty * item.price, 0)
  const [isActiveCart, setIsActiveCart] = useState(false)
const navigate = useNavigate()
  return (
    <>
      <div className={`fixed right-0 top-0 w-full lg:w-[20vw] h-full bg-white p-4 flex flex-col justify-between transition-all duration-500 z-50 ${isActiveCart ? 'translate-x-0': 'translate-x-full'}`}>
      <div>  <div className="flex justify-between items-center mt-5">
          <h1 className="text-2xl font-semibold">My Order</h1>
          <button 
          onClick={() => setIsActiveCart(!isActiveCart)}
           className="border-2 border-gray-600 text-gray-600 font-bold rounded-md p-1 hover:text-red-300 hover:border-red-300 cursor-pointer">
            <IoIosClose />
          </button>
        </div>
     <div className="mt-4">
     { cartItems.length > 0 ? 
       <div className="flex flex-col gap-5 h-full">
       
        <ItemCard cartItemsData={cartItems}/>
        
        </div>
        :
        <div className="flex justify-center items-center mt-14">
        <h1 className="self-center font-semibold text-2xl text-gray-400 font-serif">Your Cart is Empty! 😢</h1>
        </div>
      
      }
     </div>
        </div>
        <div>
          <h5 className="text-2xl">Items: {totalQty}</h5>
          <h5 className="text-2xl">Total Amount: ₹{totalAmount}</h5>
          <hr className="mt-2" />
          <button 
          onClick={() => navigate("/Success")}
          className="w-full font-medium text-white flex items-center justify-center bg-green-500 rounded-lg p-2 border text-2xl mt-4 ">
            checkout
          </button>
        
        </div>
      </div>
        <FaShoppingCart onClick={() => setIsActiveCart(!isActiveCart)} 
        className={`rounded-full bg-white shadow-md text-5xl p-3 fixed bottom-10 right-6 ${totalQty > 0 && "animate-bounce delay-500 transition-all"}`}/>
    </>
  );
};

export default Cart;
