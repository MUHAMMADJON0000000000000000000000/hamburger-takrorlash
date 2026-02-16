const express = require("express");
const app = express();

app.use("/images", express.static("public/images"));

app.get("/products", (req, res) => {
  res.json([
    {
      id: 1,
      name: "iPhone 15 Pro Max",
      price: 16000000,
      image: "http://localhost:5000/images/products/iphone.png",
    },
    {
      id: 2,
      name: "Samsung A17",
      price: 2400000,
      image: "http://localhost:5000/images/default.png",
    },
  ]);
});

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});
