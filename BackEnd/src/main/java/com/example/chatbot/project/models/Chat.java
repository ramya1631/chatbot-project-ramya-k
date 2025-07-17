package com.example.chatbot.project.models;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Chat {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    private Long id;
    private String Message;
    private String Timestamp;


//constructors
    public Chat() {
    }

    public Chat(String message, String timestamp) {
        this.Message = message;
        this.Timestamp = timestamp;
    }
    // Getters and Setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }
    public String getMessage() {
        return Message;
    }
    public void setMessage(String message) {
        this.Message = message;
    }
    public String getTimestamp() {
        return Timestamp;
    }
    public void setTimestamp(String timestamp) {
        this.Timestamp = timestamp;
    }
}
