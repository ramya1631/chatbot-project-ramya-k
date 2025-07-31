
import axios from 'axios';

const BASE_URL = 'http://localhost:8080/api/logs';

export const saveChatbotLog = async (log) => {
  try {
    const response = await axios.post(`${BASE_URL}/save`, log);
    return response.data;
  } catch (error) {
    console.error('Error saving chatbot log:', error);
    throw error;
  }
};

export const getAllChatbotLogs = async () => {
  try {
    const response = await axios.get(BASE_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching chatbot logs:', error);
    throw error;
  }
};

