import React, { useState } from 'react';

const PlacePrompt = () => {
  const [prompt, setPrompt] = useState('');

  const handleInputChange = (event) => {
    setPrompt(event.target.value);
  };

  const handleSubmit = () => {
    // Здесь вы можете добавить логику для отправки промта на сервер
    console.log('Отправленный промт:', prompt);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <div className="bg-gray-800 p-8 rounded shadow-md w-full max-w-2xl">
        <h2 className="text-3xl font-bold mb-6 text-center">Введите ваш промт</h2>
        <input
          type="text"
          value={prompt}
          onChange={handleInputChange}
          className="border border-gray-600 p-4 rounded w-full mb-4 text-black"
          placeholder="Введите текст здесь..."
        />
        <button
          onClick={handleSubmit}
          className="bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-700 w-full"
        >
          Отправить
        </button>
      </div>
    </div>
  );
}

export default PlacePrompt;
