import React, { useEffect, useRef, useState } from "react";

const App = () => {
  let [products, setProducts] = useState([]);

  async function getPrs() {
    try {
      const res = await fetch("https://dummyjson.com/products?limit=5");
      const data = await res.json();
      console.log(data);
      setProducts(data.products);
    } catch (err) {
      console.log("erosdklnlksdn", err);
    }
  }
  useEffect(() => {});

  return (
    <div>
      <ul>
        {" "}
        {products?.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
};
