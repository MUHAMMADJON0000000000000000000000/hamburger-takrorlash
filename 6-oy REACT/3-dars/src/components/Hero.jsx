import React from "react";
import Navbar from "../assets/img/big_img.png";
function Hero() {
  return (
    <div className="bg-gray-100 py-20">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <div>
          <h2 className="text-4xl font-bold mb-6">СЕРВИСНЫЙ ЦЕНТР</h2>

          <p className="border-l-4 border-pink-500 pl-4 mb-6 text-lg">
            По ремонту техники в Москве
          </p>

          <button className="bg-red-500 m-[10px] text-white px-6 py-3 rounded-md ">
            Получить консультацию
          </button>
          <button className="border border-b-black px-6 py-3 rounded-md">
            Смотреть прайс-лист
          </button>
        </div>

        <img src={Navbar} alt="Hero" className="w-[400px] rounded-xl" />
      </div>
    </div>
  );
}

export default Hero;
