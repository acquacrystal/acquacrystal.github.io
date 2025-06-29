import React from "react";

export function Card({ className, children, ...props }) {
  return (
    <div
      className={`shadow-lg rounded-2xl border border-gray-200 hover:shadow-xl transition-all ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

export function CardContent({ className, children, ...props }) {
  return (
    <div className={`p-4 ${className}`} {...props}>
      {children}
    </div>
  );
}
