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

// 1-masala
//
// let a = "JavaScript";
// console.log(a.toUpperCase());//harflarni katta qiladi
// console.log(a.toLowerCase());//hammas harfini kichikina qiladi

// console.log(a.indexOf("S"));harflarning tartib sonlarini chiqaradi
// // console.log(a.indexOf("A"));

// let part = a.slice(4, 10);//bu narsa 4 suzidan boshlab 10 harfigacha chiqaradi
// console.log(part);

// console.log(a.substring(4, 10));yuqoridagi bilan bir xil

// let str = "Hello World";
// let newstr = str.replace("World", "JavaScript");//bu suz almashtiradi birinchi berilgan boshqasiga
// console.log(newstr);

// let str = "JavaScript is awisome!";
// console.log(str.includes("awasome"));// ichida nima bor yuq ekanligini true yoki falseda chiqarib beradi
// console.log(str.includes("Bor"));

// let str = "olma,Banan,anjir";
// let fruits = str.split(", ");
// console.log(fruits);

// let str = "    Salom!     ";
// console.log(str.trim());// bush joylarini yuq qilib chiqarib beradi

// const a = 1224;
// const b = false;
// const natiga = String(a);
// const natiga2 = String(b);//narsalarni joyini almashtirib beradi
// console.log(natiga);
// console.log(natiga2);
// let str = "Hello";
// str[0] = "h";

// let newstr = "h" + str.slice(1);
// console.log(newstr);

// string metods

// let text = "HELLO WORLD";
// let char = text.charAt(2);// charAt bu harflari chiqarib beradi
// console.log(char);

// const name = "W3Schools";
// let letter = name.at(2);// bu ham shunday
// console.log(letter);

// let text = "HELLO WORLD";
// let code = text.codePointAt(11);
// console.log(code);

// const name = "W3Schools";
// let letter = name.at(2);//bu ham harfflarini chiqarib beradi
// console.log(letter);

// const name = "W3Schools";
// let letter = name[3];//bu harflarini chiqarib beradi
// console.log(letter);

// let text = "HELLO WORLD";
// text[4] = "A";
// console.log(text);

// let text1 = "Hello";
// let text2 = "World";
// let text3 = text1.concat("  ", text2);// b xususiyat bilan oldiga 2 yoki undan ortoq String qushsa buladi
// console.log(text3);

// let text = "Apple, Banana, Kiwi";
// let part = text.slice(1, 3);// sice bu metod belgilangan harfdan faqat belgilangan harfgacha chiqaradi
// console.log(part);

// let text = "Apple, Banana, Kiwi";
// let part = text.slice(-10); // bu yuqoridagini davomi menusga qarab chiqarsa ham bularkan
// console.log(part);

// let str = "Apple, Banana, Kiwi";
// let part = str.substring(6, 12); //slice bilan bulani farqi yuq
// console.log(part);

// let str = "Apple, Banana, Kiwi";
// let part = str.substr(7, 6);
// console.log(part);

// let text1 = "Hello World!";
// let text2 = text1.toUpperCase();// hamma harfni katta qilib beradi
// console.log(text2);

// let text1 = "Hello World!"; // String
// let text2 = text1.toLowerCase(); // text2 is text1 converted to lower,bu esa kichikina
// console.log(text2);

// let text = "Hello world!";
// let result = text.isWellFormed();
// console.log(result);

// let text1 = "Hello World \uD800";
// let result1 = text.isWellFormed();

// console.log(result1);

// let text = "Hello World \uD800";
// let result = text.toWellFormed();//chiaziqdan keyingisini chiqarmaydi
// console.log(result);

// let text1 = "      Hello World!      ";
// let text2 = text1.trim();///trim probellarni olib tashlab faqt harflarni chiqaradi
// console.log(text2);

// let text1 = "     Hello World!     ";
// let text2 = text1.trimStart();// bu faqat boshidagi bush joyini olib tashlab chiqarib beradi
// console.log(text2);

// let text1 = "     Hello World!     ";
// let text2 = text1.trimEnd();//bu es oxiridagi joyni olib beradi
// console.log(text2);

// let text = "5";
// let padded = text.padStart(9, "12"); // bu boshlanishidan aytilgan sonni aytilgancha qushib beradi
// console.log(padded);

// let text = "5";
// let padded = text.padEnd(4, "0"); // oxiridan qushadi
// console.log(padded);

// let numb = 5;
// let text = numb.toString(); // stringa utkazadi raqamni
// let padded = text.padEnd(4, "0");// bu son yoki harf qushadi
// console.log(typeof text, typeof padded);

// let text = "Hello world!";
// let result = text.repeat(2);// uz nomi bilan  takrorlash
// console.log(result);

// let text = "Please visit Microsoft!";
// let newText = text.replace("Microsoft", "W3Schools"); // bu ese faqat uzi kurasatganlarrinigina takrorlaydi
// console.log(newText);

// let text = "Please visit Microsoft!";
// let newText = text.replace(/MICROSOFT/i, "W3Schools");// esa bironta suzni uchirib tashlab uni urniga boshqa yozsa buladi
// console.log(newText);

// let text = "Please visit Microsoft and Microsoft!";
// let newText = text.replace(/Microsoft/g, "W3Schools");// g ishorasi 2 martta chiqarishni bildiradi
// console.log(newText);

// text = text.replaceAll("Cats", "Dogs");
// // text = text.replaceAll("cats", "dogs");
// console.log(text);

// const arry = [];
// const arry1 = arry.push(1, 2, 3, 4, 5);
// arry1.forEach(myFunction);

// const massive = ["Salom Dunyo Javascript"];
// let result = massive.replace("Microsoft", "W3Schools");
// console.log(result);

// const massive = [2, 3, 4, 14, 33];
// console.log(massive[0] + massive[1] + massive[2] + massive[3] + massive[4]);

// const navbat = ["Ali", "Vali", "Gani"];
// let padded = navbat.padStart(2, "Attaor"); // bu boshlanishidan aytilgan sonni aytilgancha qushib beradi
// console.log(padded);
// let numb = 5;
// let text = numb.toString();
// let padded1 = text.padStart(4, "0");
// console.log(padded1);

// let newText = text.(/Microsoft/g, "W3Schools");// g ishorasi 2 martta chiqarishni bildiradi

// const c = b.splice(4, 5);
// console.log(c);

// cunsrtuctor function
// function Odam(name, age) {
//   (this.name = name), (this.age = age);
// }
// const person2 = new Odam("Ahmat", 23);
// console.log(person2);

// const person3 = new Odam("Bahodir", 32);
// console.log(person3);
//1
// const esy = [1, 2, 3, 4, 5];
// let s = esy.repeat(5, 4, 3, 2, 1);
// console.log(s);
//2
// const b = "hello";
// console.log(b.toUpperCase());
//3
// const esy = [1, 2, 3, 4, 5];
// console.log(esy);
// esy.push(6);
// console.log(esy);
//4
// const esy = [2, 8, 8];
// console.log(esy.length);

// let a = "hello world";
// let b = a.replace("Javascript", "and");
// console.log(b);

// let a = "hello world";
// let b = a.replace("Javascript", "and");
// console.log(b);
// let a = "hello world";
// let b = a.replace("Javascript", "and");
// console.log(b);

// const names = ["Bubur", "Alisher", "Temur", "Muhammadjon"];
// let name = names.filter((item) => item === "Muhammadjon");

// console.log("name", name[]);
//1
// let a = [1, 2, 3, 3, 4, 4, 5];
// a.reverse();
// console.log(a);
//1
// let a = [213, 12, 3134, , 32, 413];
// a.reverse();
// console.log(a);
//2
// let a = "hello";
// console.log(a.toUpperCase());
//3
// let a = [1, 2, 3, 4];
// a.push(5);
// console.log(a);
//4
// let a = "salom";
// console.log(a.length);
//5
// let a = "Hello, world";
// let new1 = a.replace("hello", "Javascript");
// console.log(new1);
//6
// let arry = [4, 9, 5];
// console.log(arry.splice(0, 1));

//7
// let country = "Uzbekistan";
// console.log(country.length);

//8
// let arrey = [2, 3, 34, 4];
// arrey.unshift(1);
// console.log(arrey);

//9
// let a = "JAVASCRIPT";
// console.log(a.toLowerCase());

//10
// let a = ["Olma anor,banan"];
// let fruits = a.split(", ");
// console.log(fruits);
// bu ishlamadi
//11
// let arr = [10, 3, 25, 1, 7];

// arr.sort((a, b) => a - b);

// console.log(arr);

// stringni bir qismini olish
// let a = "JavaScript";
// console.log(a.slice(0, 4));

// strringada malum bir suz borligini tekshirish
// let a = "Assalom alaykum";
// console.log(a.includes("Assalom"));

//7
// let a = [10, 20, 30, 40];
// console.log(a.indexOf(30));

//8
// let a = [1, 2, 3, 4, 5, 6, 5, 9];
// console.log(a.splice(1, 3));

///9
// let arr = [5, 10, 15];

// let sum = arr.reduce((total, num) => total + num, 0);

// console.log(sum);

//10
// let a = "123-12-213-34";

//11
// let a = [1, 2, 43, 4, 213];
// max = a.reduce((a, b) => (a > b ? a : b));//eng kattasini chiqarasdi
// console.log(max);

// let a = ["Orang Banan"];

// console.log("Boshidan space olib tashlash", a.trimStart());

// let arr = ["orange", "apple", "banana"];

// let result = arr.sort();

// console.log(result);

// let arr = [2, 4, 6];

// let result = arr.every(num => num % 2 === 0);

// console.log(result);
// let str = "javascript";

// let result = str.split("").reverse().join("");

// console.log(result);
// "

// let arr = [1, 2, 3, 4];

// let result = arr.map(num => num + 2);

// console.log(result);

// let arr = [1, 2, 3, 4];

// let result = arr.map(num => num + 2);

// console.log(result);
// let a = [2, 3, 3, 3, 4];
// console.log(a.length);
