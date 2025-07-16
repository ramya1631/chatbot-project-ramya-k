import React, { useState, useRef, useEffect } from 'react';
import chatbotData from './bot.json';
import ChatImg from "../assets/chatbot.gif";
import './Chatbot.css';

    // Get bot reply from JSON
    function getBotResponse(message) {
    const key = message.toLowerCase().trim();
    return chatbotData[key] || "Sorry, I didn't understand that.";
  }

  function Chatbot() {
      // State to track chat messages
    const [messages, setMessages] = useState([]);
      // State to track user input
      const [input, setInput] = useState("");
       // State to track whether chatbot is minimized or not
       const [minimized, setMinimized] = useState(true); // start minimized

       // Refs for scrolling and focusing input
         const messagesEndRef = useRef(null);
          const inputRef = useRef(null);
    // Scroll to bottom when messages update
      useEffect(() => {
       messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
      }, [messages]);
    // Focus input field when chatbot is opened
       useEffect(() => {
         if (!minimized) {
           inputRef.current?.focus();
      }
       }, [minimized]);

     // Handle send button click or Enter key press
       const handleSend = () => {
         if (!input.trim()) return;// Do nothing if input is empty

           const userMsg = { from: "user", text: input };//user msg
             const botMsg = { from: "bot", text: getBotResponse(input) };//bot reply
             // Add both messages to message list
               setMessages(prev => [...prev, userMsg, botMsg]);
                 setInput("");
                 };

                 return (
                        // Wrapper class changes depending on minimized state
                  <div className={minimized ? "chatbot-wrapper chatbot-minimized" : "chatbot-wrapper"}>

         {/* Header icon (always visible) */}
         <div
           className="chatbot-header"
             onClick={() => setMinimized(!minimized)}
               title={minimized ? "Open Chatbot" : "Minimize Chatbot"}
                  >
            <img src={ChatImg} alt="Chatbot" />
              </div>

       {/* Chat content only visible if not minimized */}
      {!minimized && (
        <>
          {/* Close (minimize) button */}
          <button
            className="chatbot-close-button"
            onClick={() => setMinimized(true)} // just minimize, don't hide
            title="Minimize Chatbot"
          >
            ×
          </button>

            {/* Message display area */}
          <div className="chatbot-chatbox" role="log" aria-live="polite">
            {messages.length === 0 && <p className="chatbot-empty">Say hi! 👋</p>}
            {messages.map((msg, i) => (
              <div key={i} className={`chatbot-message ${msg.from}`}>
                <div
                  className={`chatbot-bubble ${msg.from}`}
                  dangerouslySetInnerHTML={msg.from === "bot" ? { __html: msg.text } : undefined}
                >
                  {msg.from === "user" ? msg.text : null}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input area for typing messages*/}
          <div className="chatbot-input-area">
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === "Enter" && handleSend()}
              placeholder="Type a message..."
              className="chatbot-input"
            />
            <button
              onClick={handleSend}
              className="chatbot-send-button"
              aria-label="Send message"
            >
              Send
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Chatbot;