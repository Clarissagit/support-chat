import { useState } from "react";

function ChatInput({ onSend }) {
  const [text, setText] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();               // stop page reload

    if (!text.trim()) {               // validation: empty input
      setError("Message cannot be empty.");
      return;
    }

    onSend(text.trim());              // send to parent via prop (function)
    setText("");
    setError("");
  }

  return (
    <form className="chat-input" onSubmit={handleSubmit}>
      <div className="input-row">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Type your message..."
        />
        <button type="submit">Send</button>
      </div>
      {error && <p className="error">{error}</p>}
    </form>
  );
}

export default ChatInput;