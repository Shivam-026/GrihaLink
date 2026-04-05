import React from "react";
import { contacts } from "../data/contacts";

export default function Contacts() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Important Contacts</h1>
      {contacts.map((c, i) => (
        <div key={i} className="bg-white p-4 rounded shadow mb-2">
          <p className="font-semibold">{c.dept}</p>
          <p>{c.phone}</p>
        </div>
      ))}
    </div>
  );
}