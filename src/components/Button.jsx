import React from "react";

export default function Button() {
  return (
    <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-3 sm:space-y-0 justify-between mt-6 mb-6">
      <button
        type="submit"
        className="w-full sm:w-auto bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
      >
        Submit
      </button>
      <button
        type="reset"
        className="w-full sm:w-auto bg-gray-300 text-gray-700 px-6 py-2 rounded hover:bg-gray-400 transition"
      >
        Clear
      </button>
    </div>
  );
}
