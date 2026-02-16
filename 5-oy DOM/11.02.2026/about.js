const s = new URLSearchParams(window.location.search);

const id = s.get("id");
console.log(id);

// console.log(id);
// if (!id) {
//   console.log("ID topilmadi");
//   return;
// }

async function getItem() {
  try {
    const res = await fetch(
      "https://jsonplaceholder.typicode.com/albums/" + id,
    );
    const data = await res.json();
    // console.log(data);

    return data;
  } catch (err) {
    console.log("erasdad", err);
  }
}
renderItem();
getItem();
async function renderItem() {
  try {
    const data = await getItem();
    console.log("data", data);
    // console.log(data);
  } catch (err) {
    console.log("asdasdasdasdasda", err);
  }
}
