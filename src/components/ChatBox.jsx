import { useState } from "react";
import { askQuestion } from "../services/api";

const ChatBox = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { sender: "user", text: input };

    // Add user message
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    try {
      const res = await askQuestion(input);

      const aiMessage = {
        sender: "ai",
        text: res.answer || "No response from AI",
      };

      setMessages((prev) => [...prev, aiMessage]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        { sender: "ai", text: "Something went wrong. Try again." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-[80vh] max-w-2xl mx-auto bg-white shadow-lg rounded-2xl p-4">
      
      {/* Header */}
      <h2 className="text-xl font-semibold text-center mb-4">
        GrihaLink Assistant
      </h2>

      {/* Chat Area */}
      <div className="flex-1 overflow-y-auto space-y-3 p-2">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`p-3 rounded-xl max-w-[75%] ${
              msg.sender === "user"
                ? "bg-blue-500 text-white ml-auto"
                : "bg-gray-200 text-black mr-auto"
            }`}
          >
            {msg.text}
          </div>
        ))}

        {/* Loading */}
        {loading && (
          <div className="bg-gray-200 text-black p-3 rounded-xl w-fit">
            Typing...
          </div>
        )}
      </div>

      {/* Input Area */}
      <div className="flex mt-4">
        <input
          type="text"
          className="flex-1 border rounded-l-xl px-4 py-2 focus:outline-none"
          placeholder="Ask your society query..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        />

        <button
          onClick={sendMessage}
          className="bg-blue-500 text-white px-4 py-2 rounded-r-xl hover:bg-blue-600"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatBox;