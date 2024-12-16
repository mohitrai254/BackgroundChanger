import { useState } from "react";

function App() {
  const [color, setColor] = useState("olive");
  return (
    <div className="width-full h-screen" style={{ backgroundColor: color }}>
      <div className="flex gap-4 absolute top-1/2 left-1/2 transform -translate-x-1/2">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded-full"
          onClick={() => setColor("blue")}
        >
          Blue
        </button>
        <button
          className="px-4 py-2 bg-green-500 text-white rounded-full"
          onClick={() => setColor("green")}
        >
          Green
        </button>
        <button
          className="px-4 py-2 bg-yellow-500 text-white rounded-full"
          onClick={() => setColor("yellow")}
        >
          Yellow
        </button>
        <button
          className="px-4 py-2 bg-red-500 text-white rounded-full"
          onClick={() => setColor("red")}
        >
          Red
        </button>
      </div>
    </div>
  );
}

export default App;
