import { useState } from "react";
import {
  Bot,
  Send,
  Paperclip,
  Mic,
  Sparkles,
  ArrowLeft
} from "lucide-react";
import { Link } from "react-router-dom";

import "./Dashboard.css";

function Assistant() {
  const [message, setMessage] = useState("");

  const suggestions = [
    "What is my class schedule today?",
    "Show me the latest university notices",
    "What documents are available?",
    "Tell me about the examination schedule"
  ];

  const handleSuggestion = (suggestion) => {
    setMessage(suggestion);
  };

  const handleSend = () => {
    if (!message.trim()) {
      return;
    }

    console.log("User message:", message);
    setMessage("");
  };

  return (
    <div className="dashboard">

      {/* Sidebar */}
      <aside className="sidebar">

        <div className="sidebar-logo">
          <div className="logo-icon">
            <Sparkles size={22} />
          </div>

          <div className="logo-text">
            <h2>AI Campus</h2>
            <span>Assistant</span>
          </div>
        </div>

        <nav className="sidebar-nav">

          <Link to="/dashboard" className="nav-link">
            <ArrowLeft size={19} />
            <span>Dashboard</span>
          </Link>

          <Link to="/assistant" className="nav-link active">
            <Bot size={19} />
            <span>AI Assistant</span>
          </Link>

          <Link to="/schedule" className="nav-link">
            <span>📅</span>
            <span>Schedule</span>
          </Link>

          <Link to="/notices" className="nav-link">
            <span>📢</span>
            <span>Notices</span>
          </Link>

          <Link to="/documents" className="nav-link">
            <span>📄</span>
            <span>Documents</span>
          </Link>

          <Link to="/settings" className="nav-link">
            <span>⚙️</span>
            <span>Settings</span>
          </Link>

        </nav>

        <div className="sidebar-bottom">

          <Link to="/" className="nav-link logout">
            <span>↪</span>
            <span>Logout</span>
          </Link>

        </div>

      </aside>

      {/* Main Area */}
      <main className="dashboard-main">

        {/* Header */}
        <header className="dashboard-header">

          <div>
            <h2>AI Assistant</h2>
            <p>Ask questions about your campus</p>
          </div>

          <div className="student-profile">

            <div className="student-avatar">
              AD
            </div>

            <div className="student-info">
              <strong>Akashdeep Das</strong>
              <span>Student</span>
            </div>

          </div>

        </header>

        {/* Assistant */}
        <section className="assistant-page">

          <div className="assistant-container">

            <div className="assistant-welcome">

              <div className="assistant-bot-icon">
                <Bot size={34} />
              </div>

              <h1>How can I help you today?</h1>

              <p>
                Ask me anything about your university, academics,
                schedules, notices, or documents.
              </p>

            </div>

            {/* Suggestions */}
            <div className="assistant-suggestions">

              {suggestions.map((suggestion, index) => (
                <button
                  key={index}
                  onClick={() => handleSuggestion(suggestion)}
                >
                  {suggestion}
                </button>
              ))}

            </div>

            {/* Input */}
            <div className="assistant-input-area">

              <button
                className="assistant-icon-button"
                type="button"
              >
                <Paperclip size={19} />
              </button>

              <input
                type="text"
                placeholder="Ask your campus assistant..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handleSend();
                  }
                }}
              />

              <button
                className="assistant-icon-button"
                type="button"
              >
                <Mic size={19} />
              </button>

              <button
                className="assistant-send-button"
                type="button"
                onClick={handleSend}
              >
                <Send size={19} />
              </button>

            </div>

            <p className="assistant-disclaimer">
              AI Campus Assistant may occasionally provide inaccurate
              information. Verify important university information.
            </p>

          </div>

        </section>

      </main>

    </div>
  );
}

export default Assistant;