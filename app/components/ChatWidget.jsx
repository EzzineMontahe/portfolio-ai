"use client";
import { useState } from "react";

export default function ChatWidget({ inline = false }) {
  const [open, setOpen] = useState(inline);
  const [messages, setMessages] = useState([
    { role: "assistant", content: "Hey! I'm Montahe's AI assistant. Ask me anything about her work, skills, or availability 👋" }
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [sessionId] = useState(() => Math.random().toString(36).substring(2, 10));

  const sendMessage = async () => {
    if (!input.trim()) return;
    const userMessage = { role: "user", content: input };
    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);
    setInput("");
    setLoading(true);
    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: updatedMessages, sessionId }),
      });
      const data = await response.json();
      setMessages([...updatedMessages, { role: "assistant", content: data.reply }]);
    } catch {
      setMessages([...updatedMessages, { role: "assistant", content: "Sorry, something went wrong!" }]);
    }
    setLoading(false);
  };

  const ChatUI = (
    <div style={{ display: "flex", flexDirection: "column", height: inline ? "420px" : "380px" }}>
      {!inline && (
        <div style={{
          padding: "0.85rem 1rem",
          borderBottom: "1px solid rgba(255,255,255,0.08)",
          display: "flex", justifyContent: "space-between", alignItems: "center"
        }}>
          <div>
            <p style={{ fontSize: "0.85rem", fontWeight: 600, color: "#fff", margin: 0 }}>Montahe's Assistant</p>
            <p style={{ fontSize: "0.72rem", color: "rgba(255,255,255,0.4)", margin: 0 }}>Ask me anything</p>
          </div>
          <button onClick={() => setOpen(false)} style={{ background: "none", border: "none", color: "rgba(255,255,255,0.4)", cursor: "pointer", fontSize: "1rem" }}>✕</button>
        </div>
      )}

      <div style={{
        flex: 1, overflowY: "auto", padding: "1rem",
        display: "flex", flexDirection: "column", gap: "0.75rem"
      }}>
        {messages.map((msg, i) => (
          <div key={i} style={{ display: "flex", justifyContent: msg.role === "user" ? "flex-end" : "flex-start" }}>
            <div style={{
              maxWidth: "78%",
              padding: "0.6rem 0.9rem",
              borderRadius: msg.role === "user" ? "12px 12px 2px 12px" : "12px 12px 12px 2px",
              background: msg.role === "user" ? "#6B8F6E" : "rgba(255,255,255,0.08)",
              color: msg.role === "user" ? "#fff" : "rgba(255,255,255,0.85)",
              fontSize: "0.88rem",
              lineHeight: 1.6,
              wordBreak: "break-word"
            }}>
              {msg.content}
            </div>
          </div>
        ))}
        {loading && (
          <div style={{ display: "flex", justifyContent: "flex-start" }}>
            <div style={{
              padding: "0.6rem 0.9rem", borderRadius: "12px 12px 12px 2px",
              background: "rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.4)", fontSize: "0.85rem"
            }}>typing...</div>
          </div>
        )}
      </div>

      <div style={{
        padding: "0.75rem",
        borderTop: "1px solid rgba(255,255,255,0.08)",
        display: "flex", gap: "0.5rem"
      }}>
        <input
          type="text"
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => e.key === "Enter" && sendMessage()}
          placeholder="Type a message..."
          style={{
            flex: 1,
            background: "rgba(255,255,255,0.07)",
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: "6px",
            padding: "0.55rem 0.85rem",
            color: "#fff",
            fontSize: "0.85rem",
            outline: "none"
          }}
        />
        <button onClick={sendMessage} style={{
          background: "#6B8F6E",
          border: "none",
          borderRadius: "6px",
          padding: "0.55rem 1rem",
          color: "#fff",
          fontSize: "0.82rem",
          fontWeight: 600,
          cursor: "pointer",
          transition: "background 0.2s"
        }}>
          Send
        </button>
      </div>
    </div>
  );

  if (inline) return ChatUI;

  return (
    <div style={{ position: "fixed", bottom: "1.5rem", right: "1.5rem", zIndex: 100, display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "0.75rem" }}>
      {open && (
        <div style={{
          width: "340px",
          background: "#1A1A18",
          border: "1px solid rgba(255,255,255,0.08)",
          borderRadius: "14px",
          overflow: "hidden",
          boxShadow: "0 20px 60px rgba(0,0,0,0.4)"
        }}>
          {ChatUI}
        </div>
      )}
      <button onClick={() => setOpen(!open)} style={{
        width: "52px", height: "52px",
        background: "#6B8F6E",
        border: "none",
        borderRadius: "50%",
        cursor: "pointer",
        boxShadow: "0 4px 20px rgba(107,143,110,0.4)",
        display: "flex", alignItems: "center", justifyContent: "center",
        transition: "all 0.2s"
      }}>
        {open ? (
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M4 4L16 16M16 4L4 16" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
          </svg>
        ) : (
          <svg width="26" height="26" viewBox="0 0 38 38" fill="none">
            <path d="M5 8C5 6.3 6.3 5 8 5H30C31.7 5 33 6.3 33 8V24C33 25.7 31.7 27 30 27H22L14 33V27H8C6.3 27 5 25.7 5 24V8Z" fill="white"/>
            <rect x="11" y="14" width="5" height="2.5" rx="1.25" fill="#6B8F6E"/>
            <rect x="11" y="19" width="16" height="2.5" rx="1.25" fill="#6B8F6E"/>
            <circle cx="28" cy="14" r="2" fill="#6B8F6E"/>
          </svg>
      )}
      </button>
    </div>
  );
}