async function getProducts() {
  try {
    const t = await fetch("https://jsonplaceholder.typicode.com/albums/");
    const data = await t.json();
    // console.log(data);

    return data.slice(0, 20);
  } catch (err) {
    console.log("ERRSS", err);
  }
}
// getProducts();
const list = document.getElementById("list");
TreadElement();

async function TreadElement() {
  try {
    const items = await getProducts();
    console.log(items);

    items.forEach((element) => {
      const li = document.createElement("li");
      li.innerHTML = `
        <a href='./about.html?id=${element.id}'>${element.title}</a>
      `;
      list.appendChild(li);
    });
  } catch (err) {
    console.log("ROIEOFNO", err);
  }
}
