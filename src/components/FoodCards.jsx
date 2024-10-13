import { FaStar } from "react-icons/fa";
import { useDispatch} from 'react-redux'
import { addToCart } from "../redux/slices/cartSlice";


const FoodCards = ({handleToast, filteredFoodData}) => {
  
  const dispatch = useDispatch()
  return (
    <div className="flex flex-wrap gap-10 mt-8 justify-center lg:justify-start">
      {filteredFoodData?.map((card, index) => {
        const {id, name, price, rating, img, desc} = card
        return (
          <div
            key={index}
            className="w-[300px] bg-white p-5 rounded-lg flex flex-col gap-4"
          >
            <img
              src={img}
              className="w-auto h-[130px] hover:scale-110 cursor-grab transition-all duration-500 ease-in-out object-fill"
            />
            <div className="flex justify-between">
              <h1>{name}</h1>
              <span>₹{price}</span>
            </div>
            <p className="font-normal text-sm">{desc.slice(0, 50)}...</p>
            <div className="flex justify-between">
              <div className="flex gap-2 text-center justify-center">
                <FaStar className="fill-yellow-300 mt-1" />
                <div className="text-2xl">{rating}</div>
              </div>
              <button 
              onClick={() => {
                  dispatch(
                    addToCart({id , name, img, price, rating, qty: 1})
                  );
                handleToast(name);
              }}
              className="bg-green-500 hover:bg-green-600 rounded-lg text-white text-sm p-1"
              >
                Add to card
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FoodCards;
