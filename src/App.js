import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Contacts from "./pages/Contacts";
import Chat from "./pages/Chat";

export default function App() {
  const [activePage, setActivePage] = useState("home");

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar setActivePage={setActivePage} />
      <div className="p-6">
        {activePage === "home" && <Home />}
        {activePage === "contacts" && <Contacts />}
        {activePage === "chat" && <Chat />}
      </div>
    </div>
  );
}