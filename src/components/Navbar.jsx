import { NavLink } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";

const Navbar = () => {
  const {cart} = useSelector((state) => state);

  return (
    <div className="bg-slate-900">
    <div className="flex max-w-6xl justify-between items-center h-20  mx-auto ">

      <NavLink to='/'>
        <img src="../shopping-logo.png" className="h-14"/>
      </NavLink>


      <div className="flex items-center font-medium text-slate-100 mr-5 space-x-6">

        <NavLink to='/'>
          <div className="text-white hover:text-green-800 ">Home</div>
        </NavLink> 

        <NavLink to='/cart'>
          <div  className="text-white relative">
          <FaShoppingCart className="text-2xl hover:text-green-800" />
          {
            cart.length > 0 &&
            <span className="absolute -top-1 -right-2 bg-green-600 text-xs w-5 h-5 flex 
            justify-center items-center animate-bounce rounded-full text-white" 
            >{cart.length}</span>
          }
          </div>
        </NavLink>

      </div>
    </div>
    </div>
  );
};

export default Navbar;
