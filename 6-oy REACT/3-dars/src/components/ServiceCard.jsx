import React from "react";
function ServiceCard({ title, description, image }) {
  return (
    <div className="bg-white rounded-xl p-8 flex justify-between items-center shadow-md">
      <div className="max-w-md">
        <h3 className="text-xl font-semibold mb-4">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <button className="border px-4 py-2 rounded-md">Подробнее</button>
      </div>

      <img src={image} alt="" className="w-48" />
    </div>
  );
}

export default ServiceCard;
