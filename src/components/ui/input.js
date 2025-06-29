import React from "react";

export function Input({ className, ...props }) {
  return (
    <input
      className={`w-full rounded-2xl px-5 py-3 text-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 transition-all ${className}`}
      {...props}
    />
  );
}
