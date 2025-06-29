import React from "react";

export function Button({ className, children, ...props }) {
  return (
    <button
      className={`px-6 py-3 text-lg font-semibold rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:shadow-xl transition-all flex items-center justify-center gap-2 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
