package com.example.chatbot.project.models;

import jakarta.persistence.*;

// This class represents a Contact entity stored in the "contacts" table in the database.
@Entity
@Table(name = "contacts")
public class Contact {

    // Primary key field with auto-increment strategy
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    // Name of the person submitting the contact form
    private String name;

    // Email address of the user
    private String email;

    // Subject or topic of the message
    private String subject;

    // Main message content, stored as TEXT in the database to allow longer content
    @Column(columnDefinition = "TEXT")
    private String message;

    // Getter and setter for name
    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }

    // Getter and setter for email
    public String getEmail() {
        return email;
    }
    public void setEmail(String email) {
        this.email = email;
    }

    // Getter and setter for subject
    public String getSubject() {
        return subject;
    }
    public void setSubject(String subject) {
        this.subject = subject;
    }

    // Getter and setter for message
    public String getMessage() {
        return message;
    }
    public void setMessage(String message) {
        this.message = message;
    }

    // Getter and setter for id
    public void setId(Long id) {
        this.id = id;
    }
    public Long getId() {
        return id;
    }
}
