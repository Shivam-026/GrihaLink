import React from "react";

export default function Message({ sender, text }) {
  return (
    <div className={`mb-2 ${sender === "user" ? "text-right" : "text-left"}`}>
      <span
        className={`inline-block px-3 py-2 rounded ${
          sender === "user"
            ? "bg-blue-500 text-white"
            : "bg-gray-200"
        }`}
      >
        {text}
      </span>
    </div>
  );
}