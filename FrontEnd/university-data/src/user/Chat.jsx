// src/pages/user/Chat.jsx
import React, { useState } from 'react';

import { saveChatbotLog } from "../services/chatbotLogService";

const Chat = () => {
  const [message, setMessage] = useState('');
  const [chatHistory, setChatHistory] = useState([]);

  const fetchBotResponse = async (userMessage) => {
    // Dummy API simulation — replace with actual call to your backend
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(`Bot response to: "${userMessage}"`);
      }, 500);
    });
  };

  const handleSendMessage = async () => {
    if (!message.trim()) return;

    const userMessage = message;
    const userEmail = localStorage.getItem('email') || 'anonymous@guest.com';

    setChatHistory((prev) => [...prev, { sender: 'user', text: userMessage }]);

    const botResponse = await fetchBotResponse(userMessage);
    setChatHistory((prev) => [...prev, { sender: 'bot', text: botResponse }]);

    await saveChatbotLog({
      userEmail,
      userMessage,
      botResponse,
    });

    setMessage('');
  };

  return (
    <>
      <NavbarUser />
      <div className="d-flex justify-content-center mt-4">
        <div style={{ width: '500px' }}>
          <div style={styles.chatboxContainer}>
            <div style={styles.chatboxHeader}>UniBot - College Chat Assistant</div>

            <div style={styles.chatboxMessages}>
              {chatHistory.map((entry, index) => (
                <div
                  key={index}
                  style={{
                    ...styles.message,
                    ...(entry.sender === 'user' ? styles.userMessage : styles.botMessage),
                  }}
                >
                  {entry.text}
                </div>
              ))}
            </div>

            <div style={styles.chatboxInput}>
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your message..."
                style={styles.input}
              />
              <button onClick={handleSendMessage} style={styles.button}>
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Chat;
