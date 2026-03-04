import React, { useEffect, useState } from "react";

function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  async function getPrs() {
    try {
      const res = await fetch("https://dummyjson.com/products?limit=5");
      const data = await res.json();
      setProducts(data.products);
    } catch (err) {
      console.log("Xatolik:", err);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getPrs();
  }, []);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
      {products.map((item) => (
        <div
          key={item.id}
          style={{
            width: "250px",
            border: "1px solid #ddd",
            padding: "10px",
            borderRadius: "10px",
          }}
        >
          <img
            src={item.thumbnail}
            alt={item.title}
            style={{ width: "100%", height: "150px", objectFit: "cover" }}
          />
          <h3>{item.title}</h3>
          <p>{item.description}</p>
          <h4>${item.price}</h4>
        </div>
      ))}
    </div>
  );
}

export default Products;
