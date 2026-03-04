import React from "react";
function ContactForm() {
  return (
    <div className="bg-gray-700 py-20">
      <div className="max-w-4xl mx-auto bg-white p-10 rounded-xl">
        <h2 className="text-3xl font-bold mb-6">
          У ВАС ОСТАЛИСЬ <span className="text-red-500">ВОПРОСЫ?</span>
        </h2>

        <div className="grid grid-cols-2 gap-6">
          <div className="flex flex-col gap-4">
            <input className="border p-3 rounded-md" placeholder="Ваше имя" />
            <input className="border p-3 rounded-md" placeholder="E-mail" />
            <input className="border p-3 rounded-md" placeholder="Телефон" />
          </div>

          <textarea
            className="border p-3 rounded-md"
            placeholder="Опишите проблему"
          />
        </div>

        <button className="mt-6 bg-red-500 text-white px-6 py-3 rounded-md">
          Оставить заявку
        </button>
      </div>
    </div>
  );
}

export default ContactForm;
