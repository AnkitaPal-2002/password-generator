import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import Card from "./components/Card";
import BgChanger from "./components/BgChanger";
import PasswordGenerator from "./components/PasswordGenerator";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <h1 className="bg-green-500 text-black text-2xl p-4 rounded-md w-80 mb-4">
        Tailwind Test
      </h1>
      <Card username="Ankita" btnText="Click me" />
      <Card username="Uma" /> */}

      <PasswordGenerator />
    </>
  );
}

export default App;
