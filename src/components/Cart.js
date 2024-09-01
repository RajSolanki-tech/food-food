import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div className="text-center m-4 p-4">
      <h1 className="font-bold text-2xl">Cart</h1>
      <div className="w-6/12 m-auto">
        {cartItems.length === 0 ? (
          <h1 className="font-bold text-2xl m-20">
            Your cart is empty... add items to the cart!!
          </h1>
        ) : (
          <button
            className="px-3 py-1.5 bg-red-700 m-2 rounded-lg text-white font-medium text-sm"
            onClick={handleClearCart}
          >
            Clear Cart
          </button>
        )}
        <ItemList items={cartItems} />
      </div>
    </div>
  );
};

export default Cart;
