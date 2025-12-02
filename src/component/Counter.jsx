import React from "react";
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <>
      <div className="flex items-center justify-center gap-8">
        <button
          onClick={() => {
            if (count < 10) {
              setCount(count + 1);
            }
          }}
          className="w-10 h-10 bg-blue-500 text-white text-xl"
        >
          +
        </button>
        <p>{count}</p>
        <button
          onClick={() => {
            if (count > 0) setCount(count - 1);
          }}
          className="w-10 h-10 bg-blue-500 text-white text-xl"
        >
          -
        </button>
      </div>
    </>
  );
}

export default Counter;
