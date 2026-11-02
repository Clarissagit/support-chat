function ChatHeader({ title, status }) {
  return (
    <div className="chat-header">
      <div className="avatar">S</div>
      <div>
        <h2>{title}</h2>
        <span className="status">● {status}</span>
      </div>
    </div>
  );
}

export default ChatHeader;