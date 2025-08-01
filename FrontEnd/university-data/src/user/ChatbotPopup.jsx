import React, { useState, useEffect, useRef } from 'react';
import './ChatbotPopup.css';
import intentsData from '../data/intents.json';

const userColors = ['#d1ffd6', '#fce4ec', '#fff9c4', '#e1f5fe', '#f3e5f5'];
const botColors = ['#f5f5f5', '#c8e6c9', '#ffe0b2', '#d7ccc8', '#e0f2f1'];

function ChatbotPopup() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { type: 'bot', text: '👋 Hello! How can I assist you today?' },
  ]);
  const [input, setInput] = useState('');
  const [context, setContext] = useState(null);
  const chatEndRef = useRef(null);

  const tags = intentsData.intents
    .filter(intent => intent.tag !== 'unknown')
    .map(intent => intent.tag);

  useEffect(() => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  useEffect(() => {
    const interval = setInterval(() => {
      const userMessages = document.querySelectorAll('.chat-user');
      const botMessages = document.querySelectorAll('.chat-bot');

      const userColor = userColors[Math.floor(Math.random() * userColors.length)];
      const botColor = botColors[Math.floor(Math.random() * botColors.length)];

      userMessages.forEach(msg => {
        msg.style.backgroundColor = userColor;
      });
      botMessages.forEach(msg => {
        msg.style.backgroundColor = botColor;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const getBotResponse = (message) => {
    const msg = message.toLowerCase();

    for (let intent of intentsData.intents) {
      if (intent.context_filter && intent.context_filter !== context) continue;

      for (let pattern of intent.patterns) {
        if (msg.includes(pattern.toLowerCase()) || msg === pattern.toLowerCase()) {
          if (intent.context_set) {
            setContext(intent.context_set);
          } else {
            setContext(null);
          }

          const responses = intent.responses;
          return responses[Math.floor(Math.random() * responses.length)];
        }
      }
    }

    setContext(null);
    const unknown = intentsData.intents.find(i => i.tag === "unknown");
    return unknown.responses[Math.floor(Math.random() * unknown.responses.length)];
  };

  const handleSend = (msg = input) => {
    if (msg.trim() === '') return;

    const userMessage = { type: 'user', text: msg };
    setMessages(prev => [...prev, userMessage]);

    setTimeout(() => {
      const botText = getBotResponse(msg.trim());
      const botMessage = { type: 'bot', text: botText };
      setMessages(prev => [...prev, botMessage]);
    }, 600);

    setInput('');
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') handleSend();
  };

  const handleRefreshChat = () => {
    setMessages([{ type: 'bot', text: '👋 Hello! How can I assist you today?' }]);
    setContext(null);
  };

  return (
    <>
      <button className="chat-toggle-btn" onClick={() => setOpen(!open)}>
        <i className="fas fa-robot"></i>
      </button>

      {open && (
        <div className="chatbox">
          <div className="chatbox-header">
            <span>Chatbot Assistant</span>
            <div>
              <button className="btn btn-sm btn-light me-2" onClick={handleRefreshChat}>Refresh</button>
              <button className="btn-close btn-close-white float-end" onClick={() => setOpen(false)}></button>
            </div>
          </div>

          <div className="chatbox-body">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`chat-message ${msg.type === 'user' ? 'chat-user' : 'chat-bot'}`}
              >
                {msg.text}
              </div>
            ))}
            <div ref={chatEndRef}></div>

            <div className="recommendation-buttons">
              {tags.map((tag, idx) => (
                <button
                  key={idx}
                  className="recommend-btn"
                  onClick={() => handleSend(tag)}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>


          <div className="chatbox-footer">
            <input
              type="text"

              className="form-control"
              placeholder="Type your message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyPress}
            />
            <button className="btn btn-primary" onClick={() => handleSend()}>
              Send

            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default ChatbotPopup;



