import React, { useCallback, useEffect, useState, useRef } from "react";

const PasswordGenerator = () => {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState("false");
  const [charAllowed, setCharAllowed] = useState("false");
  const [password, setPassword] = useState("");

  // useRef hook
  const passwordRef = useRef(null);

  const PasswordGenerate = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed === "true") str += "0123456789";
    if (charAllowed === "true") str += "!@#$%^&*()-_=+[]{}|;:,.<>/?";
    for (let i = 1; i <= length; i++) {
      pass += str.charAt(Math.floor(Math.random() * str.length));
    }
    setPassword(pass);
  }, [length, numberAllowed, charAllowed]);

  useEffect(() => {
    PasswordGenerate();
  }, [length, numberAllowed, charAllowed, PasswordGenerate]);

  const copyToClipboard = useCallback(() => {
    passwordRef.current?.select();
    //passwordRef.current?.setSelectionRange(0, 3);
    window.navigator.clipboard.writeText(password);
  }, [password]);

  return (
    <div className="w-full h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-700 flex justify-center items-center">
      <div className="w-full max-w-md shadow-lg rounded-lg p-6 bg-gray-800 text-white">
        <h1 className="text-2xl font-bold text-center mb-6 text-orange-400">
          Password Generator
        </h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-6">
          <input
            type="text"
            value={password}
            className="w-full px-3 py-2 text-gray-700 bg-gray-100 placeholder-gray-400 focus:outline-none text-lg"
            placeholder="Generated Password"
            readOnly
            ref={passwordRef}
          />
          <button
            onClick={copyToClipboard}
            className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 text-lg font-semibold transition duration-300"
          >
            Copy
          </button>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <label className="text-lg">Password Length:</label>
            <div className="flex items-center gap-2">
              <input
                type="range"
                min={6}
                max={100}
                value={length}
                className="cursor-pointer w-full"
                onChange={(e) => setLength(e.target.value)}
              />
              <span className="text-orange-400 font-bold">{length}</span>
            </div>
          </div>

          <div className="flex items-center gap-x-4">
            <label className="flex items-center gap-x-2 text-lg">
              <input
                type="checkbox"
                checked={numberAllowed === "true"}
                onChange={(e) =>
                  setNumberAllowed(e.target.checked ? "true" : "false")
                }
                className="accent-orange-400"
              />
              Include Numbers
            </label>
          </div>

          <div className="flex items-center gap-x-4">
            <label className="flex items-center gap-x-2 text-lg">
              <input
                type="checkbox"
                checked={charAllowed === "true"}
                onChange={(e) =>
                  setCharAllowed(e.target.checked ? "true" : "false")
                }
                className="accent-orange-400"
              />
              Include Special Characters
            </label>
          </div>
        </div>

        <button
          onClick={PasswordGenerate}
          className="w-full mt-6 bg-orange-500 hover:bg-orange-600 text-white py-3 text-lg font-semibold rounded-lg transition duration-300"
        >
          Generate New Password
        </button>
      </div>
    </div>
  );
};

export default PasswordGenerator;
