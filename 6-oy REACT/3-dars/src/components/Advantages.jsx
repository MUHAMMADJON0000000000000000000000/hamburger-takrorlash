import React from "react";
function Advantages() {
  return (
    <div className="bg-gray-100 py-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-10">
          НАШИ <span className="text-red-500">ПРЕИМУЩЕСТВА</span>
        </h2>

        <div className="grid grid-cols-3 gap-6">
          <div className="bg-gray-200 p-8 rounded-xl">
            <h3 className="font-semibold mb-4">Удаленная диагностика</h3>
            <p>Проведем предварительную диагностику...</p>
          </div>

          <div className="bg-gray-600 text-white p-8 rounded-xl">
            <h3 className="font-semibold mb-4">
              Покажем причины неисправности
            </h3>
            <p>Сделаем бесплатную диагностику...</p>
          </div>

          <div className="bg-red-400 text-white p-8 rounded-xl">
            <h3 className="font-semibold mb-4">Прозрачная цена</h3>
            <p>Заранее согласуем цену...</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Advantages;
