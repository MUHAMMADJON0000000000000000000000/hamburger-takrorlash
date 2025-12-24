// .length          // uzunligi
// .toUpperCase()   // KATTA HARF
// .toLowerCase()   // kichik harf
// .trim()          // bosh-oxir bo‘shliqni olib tashlaydi

// let a = ["Ali Vali Ahmat"];

// let result = a.map((name) => name.toUpperCase());
// console.log(result);

// // console.log(a[0].toUpperCase);

// let a = ["salom"];

// console.log(a[0].toLowerCase());

// console.log(a[0].toLowerCase());
// // yoki
// console.log(a.map((x) => x.toLowerCase()));

// let nums = [1, 2, 3];

// // nums.map((n) => {
// //   n * n;
// // });

// // console.log(nums);
// let result = nums.map((n) => n * 2);
// console.log(result);

let a = ["Ali", "Vali"];

// if (a.includes("ali")) {
//   console.log("Bor");
// }
// console.log(a);
if (a.map((x) => x.toLowerCase()).includes("ali")) {
  console.log("bor");
}
