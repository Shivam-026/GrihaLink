import React from "react";
import ChatBox from "../components/ChatBox";

export default function Chat() {
  return (
    <div className="max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Ask GrihaLink</h1>
      <ChatBox />
    </div>
  );
}