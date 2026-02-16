// Senkiron dasrturlash
// console.log("1");
// console.log("2");
// console.log("3");
//Asinkron dasturlash

// console.log("1");

// setTimeout(() => {
//   console.log("2");
// }, 2000);

// console.log("3");

fetch("http://localhost:5000/products")
  .then((res) => res.json())
  .then((data) => {
    const box = document.getElementById("products");
    // node server.js   runn qilishshshshshshhshshhsh

    data.forEach((p) => {
      box.innerHTML += `
        <div style="width:200px;border:1px solid #ddd;padding:10px">
          <img src="${p.image}" style="width:100%" />
          <h4>${p.name}</h4>
          <p>${p.price.toLocaleString()} so‘m</p>
        </div>
      `;
    });
  });
