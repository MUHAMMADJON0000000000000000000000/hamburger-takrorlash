// Takrorlash topshiriqlar:

// 1. prompt orqali foydalanuvchidan yoshini so'rang,
// agar U 16 yoshdan kichik bo'lsa, "sizga mumkin emas"  deb alert chiqsin, aks holda "xush kelibsiz" desin, agar yoshini emas boshqa narsa kiritsa(masalan: 150, -9, salom) yoshni no'to'g'ri kiritding, qayta kirit deb yana prompt chiqsin, va bu safar to'g'ri kiritsa yuqoridagi logika ishlasin.

// 2. prompt orqali foydalanuvchidan dekabr oyining kunini kiritishni so'rang, va o'sha kun qaysi hafta kuniga to'g'ri kelsa ekranga o'sha hafta kunini chiqaring. masalan 3 kiritsam chorshanba chiqishi kerak, chunki bu yil 3-dekabr chorshanbaga teng. Switch case bilan qilinsin.

// 3. promptdan foydalanuvchidan yil kiritishini so'rang, va  o'sha foydalanuvchi kiritgan yilgacha bo'lgan kabisa yillarni 1 - yildan boshlab chiqarib bering. Masalan 30 kiritsam, consolega 4, 8, 12, 16, 20, 24 lar chiqishi kerak, chunki bular kabisa yillari.

let person = prompt("plase enter your age ");
if (person <= 16) {
  prompt("siz saytga kirshingiz mumkin marxat");
}
if ((person) => 90) {
  alert(" bu yolg'on malumot");
} else {
  prompt("siz yoshingizni nutug'ri kirittingiz");
}
