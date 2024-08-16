import { useSelector } from "react-redux";
import CartItem from "../components/CartItem";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Cart = () => {

  const {cart} = useSelector((state) => state);
  const [totalAmount,setTotalAmount] = useState(0);

  useEffect(()=>{
    setTotalAmount(cart.reduce((acc,curr) => acc + curr.price, 0 ))
  },[cart])

  console.log("pratham check lenght")
  console.log(cart.length)

  return (

    <div className="flex justify-center max-w-6xl items-center mx-auto">
      {
        cart.length > 0  ? 
        (
          <div className="flex justify-between gap-56">
      <div>
        {
          cart.map((item,) => {
            return <CartItem key={item.id} item={item}></CartItem>
          })
        }
      </div>
      <div >
        <div className="flex flex-col h-full justify-between  ">
          <div className="mt-24">
            <p className="text-green-800 font-bold">Your Cart</p>
            <p className="text-green-800 font-bold text-3xl uppercase">Summary</p>
            <p className="font-bold">Total Items: {cart.length}</p>
          </div>
          <div className="mb-24">
            <p className="font-bold">Total Amount: ${totalAmount}</p>
            <button className="px-24 text-white font-bold py-2 rounded-md bg-green-800">CheckOut Now</button>
          </div>
        </div>
      </div>
    </div>
        )
        :(
          <div>
          <NavLink to='/'>
            <div className="flex justify-center items-center h-[100vh] ">Shop Now </div>
          </NavLink>
          </div>
        )
      }
    </div>
  );
};

export default Cart;
