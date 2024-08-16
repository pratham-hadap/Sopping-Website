import { useDispatch, useSelector } from "react-redux";
import { add } from "../redux/Slices/CartSlice";
import { remove } from "../redux/Slices/CartSlice";
import toast from "react-hot-toast";

const Product = ({post}) => {

  const {cart} = useSelector((state) => state);
  const dispatch = useDispatch();

  function addToCart(){
    dispatch(add(post))
    toast.success('item added')
  }

  function removeItem(){
    dispatch(remove(post.id))
    toast.error('item removed')
  }

  return (
    <div className="flex flex-col items-center justify-between 
    hover:scale-110 transition duration-300 ease-in gap-3 p-4 mt-10 ml-5 rounded-xl   shadow-[0_3px_10px_rgb(0,0,0,0.2)] ">
      <div>
        <p className="w-40 truncatev font-bold">{post.title.split(" ").slice(0,5).join(" ") + "..."}</p>
      </div>
      <div>
        <p className="w-40 text-sm text-gray-700">{post.description.split(" ").slice(0,10).join(" ") + "..."}</p>
      </div>
      <div>
        <img src={post.image} className="h-[180px]"></img>
      </div>
      <div className="flex gap-10 items-center ">
        <div>
          <p className="text-green-600 font-bold">${post.price}</p>
        </div>
        <div className="border border-black rounded-full px-3 py-1 text-sm
         hover:bg-black hover:text-white transition-all duration-300
         ease-in hover:scale-110">
          {
            cart.some((p) => p.id == post.id) ? 
            (<button  onClick={removeItem}>Remove Item</button>)
            :(<button onClick={addToCart}>Add To Cart</button>)
          }
        </div>
      </div>
    </div>
  );
};

export default Product;

