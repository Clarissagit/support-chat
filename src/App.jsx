import { useState } from "react";
import ChatHeader from "./components/ChatHeader";
import MessageList from "./components/MessageList";
import ChatInput from "./components/ChatInput";
import "./App.css";

function getTime() {
  return new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
}

// Simple rule-based support bot
function getSupportReply(text) {
  const t = text.toLowerCase();
  if (t.includes("order")) return "Could you share your order ID so I can check the status?";
  if (t.includes("refund")) return "Refunds are processed within 5–7 working days.";
  if (t.includes("price") || t.includes("cost")) return "You can find our pricing on the Plans page.";
  if (t.includes("hello") || t.includes("hi")) return "Hello! How can I help you today?";
  if (t.includes("thank")) return "You're welcome! Is there anything else I can help with?";
  return "Thanks for reaching out. An agent will look into this shortly.";
}

export default function App() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "Support",
      text: "Welcome to Customer Support! How can I help you?",
      time: getTime(),
    },
  ]);
  const [isTyping, setIsTyping] = useState(false);

  function handleSend(text) {
    const userMsg = { id: Date.now(), sender: "You", text, time: getTime() };
    setMessages((prev) => [...prev, userMsg]);
    setIsTyping(true);

    // Simulated support response after 1 second
    setTimeout(() => {
      const reply = {
        id: Date.now() + 1,
        sender: "Support",
        text: getSupportReply(text),
        time: getTime(),
      };
      setMessages((prev) => [...prev, reply]);
      setIsTyping(false);
    }, 1000);
  }

  return (
    <div className="chat-container">
      <ChatHeader title="Customer Support" status="Online" />
      <MessageList messages={messages} isTyping={isTyping} />
      <ChatInput onSend={handleSend} />
    </div>
  );
}