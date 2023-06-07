import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetProductList } from "../Store/Action/GetProductDataAction";
import { addToProductCart } from "../Store/Action/AddToCartAction";
import Header from "./Header";
import Product from "./Product";
import Basket from "./Basket";

export default function Main() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state?.product?.producList);
  
  console.log("products", products);
  useEffect(() => {
    dispatch(GetProductList());
  }, []);
  const onAdd = (data) => {
    dispatch(
      addToProductCart({
        data,
        quantity: 1,
      })
    );
  };
  return (
    <div>
      <main className="block col-2">
        <h2>Products</h2>
        <div
          className="row"
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 30,
            alignItems: "center",
          }}
        >
          {products?.products?.map((product) => (
            <Product key={product.id} product={product} onAdd={onAdd}></Product>
          ))}
        </div>
      </main>
    </div>
  );
}
