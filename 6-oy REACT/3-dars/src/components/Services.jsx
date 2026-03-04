import React from "react";
import ServiceCard from "./ServiceCard";
import TV from "../assets/img/electo.png";
import Audio from "../assets/img/phone.png";
import Phone from "../assets/img/tvvv.png";
import Scooter from "../assets/img/phone.png";

function Services() {
  return (
    <div className="bg-gray-700 py-20">
      <div className="max-w-6xl mx-auto space-y-8">
        <div>
          <h2 className="text-white text-3xl font-bold">НАШИ УСЛУГИ</h2>
          <span className="text-red-500 text-3xl font-bold">ДЛЯ ВАС</span>
        </div>

        <ServiceCard
          title="Ремонт аудио техники"
          description="Мы выполняем качественный ремонт аудиотехники..."
          image={Audio}
        />

        <ServiceCard
          title="Ремонт фото/видео техники"
          description="Осуществляем ремонт современной цифровой техники..."
          image={Camera}
        />

        <ServiceCard
          title="Ремонт телефонов"
          description="Мы предоставляем полный спектр услуг..."
          image={Phone}
        />

        <ServiceCard
          title="Ремонт электротранспорта"
          description="Осуществляем ремонт электросамокатов..."
          image={Scooter}
        />

        <ServiceCard
          title="Ремонт телевизоров"
          description="Профессиональный ремонт телевизоров..."
          image={TV}
        />
      </div>
    </div>
  );
}

export default Services;
