import React from "react";

export default function Navbar({ setActivePage }) {
  return (
    <div className="bg-blue-700 text-white p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">GrihaLink</h1>
      <div className="flex gap-4">
        <button onClick={() => setActivePage("home")}>Home</button>
        <button onClick={() => setActivePage("contacts")}>Contacts</button>
        <button onClick={() => setActivePage("chat")}>Ask Query</button>
      </div>
    </div>
  );
}