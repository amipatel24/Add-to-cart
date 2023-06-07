import React from "react";
import { useSelector } from "react-redux";

export default function Header() {
  const totalitam = useSelector((state) => state?.cart?.itemTotal);
  console.log("totalitam", totalitam);
  return (
    <div style={{backgroundColor:"#bdbecf",color:"white"}}>
      <h1>ProductList</h1>
      <p style={{fontWeight:"bold"}}> CountCartItems : {totalitam}</p>
    </div>
  );
}
