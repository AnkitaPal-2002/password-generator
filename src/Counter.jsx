import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  function addValue() {
    setCount(count + 1);
  }

  function subtractValue() {
    setCount(count - 1);
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 via-teal-500 to-cyan-500">
      <div className="bg-white p-10 rounded-xl shadow-2xl w-80">
        <h1 className="text-3xl font-semibold text-gray-800 text-center mb-6">
          Counter App
        </h1>
        <div className="text-center mb-6">
          <span className="text-xl font-medium text-gray-600">
            Current Count:
          </span>
          <div className="text-4xl font-bold text-indigo-700 mt-2">{count}</div>
        </div>
        <div className="flex justify-center gap-6">
          <button
            onClick={addValue}
            className="px-6 py-3 bg-green-600 text-white font-semibold rounded-lg shadow-lg hover:bg-green-700 transform transition-all duration-300 ease-in-out hover:scale-105"
          >
            Add
          </button>
          <button
            onClick={subtractValue}
            className="px-6 py-3 bg-red-600 text-white font-semibold rounded-lg shadow-lg hover:bg-red-700 transform transition-all duration-300 ease-in-out hover:scale-105"
          >
            Subtract
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
