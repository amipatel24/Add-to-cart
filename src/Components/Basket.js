import React from "react";
import { useSelector } from "react-redux";

export default function Basket(props) {
  // const { cartItems, onAdd, onRemove } = props;
  // const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
  // const taxPrice = itemsPrice * 0.14;
  // const shippingPrice = itemsPrice > 2000 ? 0 : 20;
  // const totalPrice = itemsPrice + taxPrice + shippingPrice;
  const cartItems = useSelector((state) => state?.cart);
  console.log("cartItems", cartItems);
  return (
    <div
      style={{
        border: "1px solid grey",
        padding: 40,
        margin: 20,
        width: 500,
        height: "100%",
      }}
    >
      <h2>Cart Items</h2>
      <div>
        {cartItems?.carts?.length === 0 && <div>Cart is empty</div>}
        {cartItems?.carts.map((item) => (
          <div key={item.id} className="row">
            <img
              className="small"
              src={item.img}
              height={100}
              width={100}
              alt={item.title}
            />
            <div className="col-2">{item.title}</div>
            <div className="col-2">
              <button className="remove">-</button>{" "}
              <button className="add">+</button>
            </div>

            <div className="col-2 text-right">
              {item.quantity} x ${item.price.toFixed(2)}
              <br />
              <strong>Total: ${item.quantity * item.price.toFixed(2)}</strong>
            </div>
          </div>
        ))}

        {cartItems?.carts.length !== 0 && (
          <>
            <hr></hr>
            <div className="row">
              <div className="col-2">
                <strong>Total Price</strong>
              </div>
              <div className="col-1 text-right">
                <strong>${cartItems?.cartTotal.toFixed(2)}</strong>
              </div>
            </div>
            <hr />
            <div className="row">
              <button onClick={() => alert("Implement Checkout!")}>
                Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
