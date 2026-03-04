import React from "react";
import Rasm from "../assets/img/image.png";
function MapSection() {
  return (
    <div className="h-[400px] bg-gray-300 flex items-center justify-center">
      <h3 className="text-xl">Здесь будет карта</h3>
      <img className="w-full h-full object-cover" src={Rasm} alt="Карта" />
    </div>
  );
}

export default MapSection;
