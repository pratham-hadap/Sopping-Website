import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/CartSlice";
import toast from "react-hot-toast";



const CartItem = ({item}) => {

  const dispatch = useDispatch();

  function removeItem(){
    dispatch(remove(item.id))
    toast.error("Item Removed")
  }

  return (
    <div className="flex gap-4  border-black border border-t-0 border-r-0 border-l-0  mt-5 mb-5 p-6 ">
      <div>
        <img src={item.image} alt="prathamimage" className="h-[180px]"></img>
      </div>
      <div>
        <p className="w-80 mb-4 font-bold">{item.title}</p>
        <p className="w-80 mb-4">{item.description.split(" ").slice(0,10).join(" ") + "..."}</p>
        
        <div className="flex justify-between items-center">
          <p className="text-green-700 font-bold">${item.price}</p>
          <div onClick={removeItem} className=" w-10 h-10 items-center flex rounded-full justify-center bg-red-300">
            <p><MdDelete /></p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default CartItem;
