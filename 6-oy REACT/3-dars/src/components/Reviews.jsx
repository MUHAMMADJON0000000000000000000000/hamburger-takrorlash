import React from "react";
function Reviews() {
  return (
    <div className="py-20 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-10">
          ОТЗЫВЫ НАШИХ <span className="text-red-500">КЛИЕНТОВ</span>
        </h2>

        <div className="grid grid-cols-3 gap-6">
          {[1, 2, 3].map((item) => (
            <div key={item} className="bg-gray-100 p-6 rounded-xl">
              <h4 className="font-semibold mb-2">Анастасия</h4>
              <p className="text-gray-600 mb-4">
                Спасибо большое сервисному центру...
              </p>
              ⭐⭐⭐⭐⭐
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Reviews;
