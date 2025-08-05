import axios from 'axios';

// Base URL for chatbot log API endpoints
const BASE_URL = 'http://localhost:8080/api/logs';

/**
 * Save a chatbot log entry to the backend.
 *
 * @param {Object} log - The log object containing message, timestamp, etc.
 * @returns {Object} - The response data from the server after saving the log.
 * @throws Will throw an error if the POST request fails.
 */
export const saveChatbotLog = async (log) => {
  try {
    const response = await axios.post(`${BASE_URL}/save`, log);
    return response.data; // Return the saved log data from the server
  } catch (error) {
    console.error('Error saving chatbot log:', error);
    throw error; // Re-throw error for caller to handle
  }
};


/**
 * Retrieve all chatbot logs from the backend.
 *
 * @returns {Array} - Array of chatbot log objects fetched from the server.
 * @throws Will throw an error if the GET request fails.
 */
export const getAllChatbotLogs = async () => {
  try {
    const response = await axios.get(BASE_URL);
    return response.data; // Return the list of all chatbot logs
  } catch (error) {
    console.error('Error fetching chatbot logs:', error);
    throw error; // Re-throw error for caller to handle
  }
};
