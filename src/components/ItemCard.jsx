import { MdDelete } from "react-icons/md";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { removeFromCart, incrementQty, decrementQty } from "../redux/slices/cartSlice";
import toast from "react-hot-toast";
const ItemCard = ({cartItemsData}) => {
  const dispatch = useDispatch()
  return (
    <>
      {cartItemsData.map ((item, index) => {
        let {name, price, img, qty, id} = item
        return (
          <div key={index} className="flex gap-2 rounded-lg shadow-lg shadow-gray-400 p-5 mb-3 pr-5">
          <MdDelete 
          onClick={() =>{
            dispatch(removeFromCart({id}))
            toast.error(`${name} Removed!`, {
              icon: '🖐'
            })
          }}
          className="w-[24px] h-[24px] absolute right-7 cursor-pointer"/>
        <img
          src={img}
          alt=""
          className="w-[50px] h-[50px]"
        />

        <div>
           <h2 className="text-xl font-bold text-gray-800">{name}</h2>
            <div className="flex justify-between">
              <span className="text-green-500 font-bold">₹{price}</span>
              <div className="flex gap-2 justify-between items-center absolute right-7">
                <AiOutlineMinus 
                onClick={()=> qty > 1 ? dispatch(decrementQty({ id })) : (qty = 0)} 
                className="border-2 border-gray-600 text-gray-600 hover:text-white hover:bg-green-500 hover:border-none rounded-md p-1 text-xl transition-all ease-linear cursor-pointer"/>
                <p>{qty}</p>
                  <AiOutlinePlus 
                  onClick={() => qty >= 1 ? dispatch(incrementQty({ id })) : (qty = 0)} 
                  className="border-2 border-gray-600 text-gray-600 hover:text-white hover:bg-green-500 hover:border-none rounded-md p-1 text-xl transition-all ease-linear cursor-pointer"/>
              </div>
            </div>
        </div>
          </div>
        )
      })}
      
    </>
  );
};

export default ItemCard;
