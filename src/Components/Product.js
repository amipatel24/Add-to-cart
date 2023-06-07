import React from "react";

export default function Product(props) {
  const { product, onAdd } = props;
  return (
    <div>
      <div style={{ border: "1px solid grey", padding: 10 }}>
        <img
          className="small"
          src={product.thumbnail}
          height={200}
          width={200}
          alt={product.title}
        />
        <h3>{product.title}</h3>
        <div>${product.price}</div>
        <div>
          <button onClick={() => onAdd(product)}>Add To Cart</button>
        </div>
      </div>
    </div>
  );
}
