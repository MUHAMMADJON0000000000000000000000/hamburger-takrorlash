import React from "react";

function Footer() {
  return (
    <div className="bg-black text-white py-10">
      <div className="max-w-6xl mx-auto flex justify-between">
        <h2 className="text-xl font-bold">
          <span className="text-red-500">k</span>repair
        </h2>

        <div className="flex gap-10 text-gray-400">
          <div>
            <p>Прайс-лист</p>
            <p>О компании</p>
            <p>Контакты</p>
          </div>

          <div>
            <p>Ремонт телефонов</p>
            <p>Ремонт электротранспорта</p>
            <p>Политика конфиденциальности</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
