import React from "react";
import { rules } from "../data/rules";

export default function Home() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-2">Welcome to GrihaLink</h1>
      <p className="mb-4 text-gray-600">Your AI-powered society assistant</p>

      <h2 className="text-2xl font-semibold mb-3">Society Rules</h2>
      <ul className="list-disc pl-5">
        {rules.map((rule, index) => (
          <li key={index}>{rule}</li>
        ))}
      </ul>
    </div>
  );
}