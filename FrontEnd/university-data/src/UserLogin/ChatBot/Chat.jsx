// src/pages/user/Chat.jsx
import React, { useState } from 'react';
import { saveChatbotLog } from "../services/chatbotLogService";

// Chat component
const Chat = () => {
  // State to hold current input message text
  const [message, setMessage] = useState('');
  // State to hold chat conversation history as an array of messages
  const [chatHistory, setChatHistory] = useState([]);

  // Simulated bot response - replace with your real backend call
  const fetchBotResponse = async (userMessage) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(`Bot response to: "${userMessage}"`);
      }, 500);
    });
  };

  // Function to handle sending message
  const handleSendMessage = async () => {
    // Prevent sending empty or whitespace messages
    if (!message.trim()) return;

    // Store the current user message
    const userMessage = message;

    // Retrieve user email from localStorage or use default fallback
    const userEmail = localStorage.getItem('email') || 'anonymous@guest.com';

    // Add user's message to chat history state (renders immediately)
    setChatHistory((prev) => [...prev, { sender: 'user', text: userMessage }]);

    // Wait for bot's response asynchronously
    const botResponse = await fetchBotResponse(userMessage);

    // Add bot's response to chat history state (renders immediately)
    setChatHistory((prev) => [...prev, { sender: 'bot', text: botResponse }]);

    // Save the chat log (user message and bot response) to backend
    await saveChatbotLog({
      userEmail,
      userMessage,
      botResponse,
    });

    // Clear the input box after sending
    setMessage('');
  };

  return (
    <>
      {/* NavbarUser component: Ensure this is imported in your file or define it */}
      <NavbarUser />

      {/* Chat container, centered horizontally with margin on top */}
      <div className="d-flex justify-content-center mt-4">
        <div style={{ width: '500px' }}>
          <div style={styles.chatboxContainer}>
            {/* Header for the chat box */}
            <div style={styles.chatboxHeader}>UniBot - College Chat Assistant</div>

            {/* Area displaying the chat messages */}
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

            {/* Input area for new messages */}
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

// Inline styles used in the component
const styles = {
  chatboxContainer: {
    border: '1px solid #ccc',
    borderRadius: 8,
    display: 'flex',
    flexDirection: 'column',
    height: 500,
    backgroundColor: '#f9f9f9',
  },
  chatboxHeader: {
    backgroundColor: '#0077b6',
    color: 'white',
    padding: '10px 15px',
    fontWeight: 'bold',
    fontSize: 18,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  chatboxMessages: {
    flex: 1,
    padding: 15,
    overflowY: 'auto',
    display: 'flex',
    flexDirection: 'column',
    gap: 10,
  },
  message: {
    padding: 10,
    borderRadius: 12,
    maxWidth: '80%',
    wordWrap: 'break-word',
  },
  userMessage: {
    alignSelf: 'flex-end',
    backgroundColor: '#caf0f8',
  },
  botMessage: {
    alignSelf: 'flex-start',
    backgroundColor: '#90e0ef',
  },
  chatboxInput: {
    display: 'flex',
    borderTop: '1px solid #ccc',
  },
  input: {
    flex: 1,
    border: 'none',
    padding: 10,
    fontSize: 16,
    borderBottomLeftRadius: 8,
  },
  button: {
    padding: '0 20px',
    fontSize: 16,
    border: 'none',
    backgroundColor: '#0077b6',
    color: 'white',
    cursor: 'pointer',
    borderBottomRightRadius: 8,
  },
};

export default Chat;
