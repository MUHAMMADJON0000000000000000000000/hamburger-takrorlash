import React from "react";
import Logo from "..//assets/img/logo_nav.svg";

function Navbar() {
  return (
    <div className="w-full bg-white shadow-sm">
      <div className="max-w-6xl mx-auto flex justify-between items-center py-4">
        <img src={Logo} alt="Logo" />

        <div className="flex gap-8 text-gray-600">
          <a href="#">Услуги</a>
          <a href="#">Прайс-лист</a>
          <a href="#">О компании</a>
          <a href="#">Контакты</a>
        </div>

        <div className="font-semibold text-black">+7 499 226 29 28</div>
      </div>
    </div>
  );
}

export default Navbar;
