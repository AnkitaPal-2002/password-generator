import React, { useState } from "react";

const BgChanger = () => {
  const [color, setColor] = useState("green");

  return (
    <div
      className="w-full h-screen duration-2000"
      style={{ backgroundColor: color }}
    >
      <div className="flex flex-wrap justify-center top-0 inset-x-10 px-4 bg-inherit">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white my-2 p-4">
          <button
            onClick={() => {
              setColor("red");
            }}
            className="bg-red-600 p-2 rounded-xl outline-none text-white"
          >
            Red
          </button>
          <button
            onClick={() => {
              setColor("olive");
            }}
            className="bg-green-600 p-2 rounded-xl outline-none text-white"
          >
            Green
          </button>
          <button
            onClick={() => {
              setColor("blue");
            }}
            className="bg-blue-600 p-2 rounded-xl outline-none text-white"
          >
            Blue
          </button>
        </div>
      </div>
    </div>
  );
};

export default BgChanger;
