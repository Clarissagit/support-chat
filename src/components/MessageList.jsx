import { useEffect, useRef } from "react";

function MessageList({ messages, isTyping }) {
  const bottomRef = useRef(null);

  // Auto-scroll to the newest message
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  return (
    <div className="message-list">
      {messages.map((m) => (
        <div
          key={m.id}
          className={`message ${m.sender === "You" ? "user" : "support"}`}
        >
          <div className="bubble">
            <p>{m.text}</p>
            <small>{m.sender} · {m.time}</small>
          </div>
        </div>
      ))}

      {isTyping && (
        <div className="message support">
          <div className="bubble typing">Support is typing...</div>
        </div>
      )}

      <div ref={bottomRef} />
    </div>
  );
}

export default MessageList;