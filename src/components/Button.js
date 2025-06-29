import React from "react";
function Button({ text, onClick }) {
  return (
    <button
      onClick={onClick}
      className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-500 transition"
    >
      {text}
    </button>
  );
}

export default Button;
