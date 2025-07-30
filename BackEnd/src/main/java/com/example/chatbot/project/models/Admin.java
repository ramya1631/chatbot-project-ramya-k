package com.example.chatbot.project.models;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity // This annotation indicates that this class is a JPA entity

public class Admin {
    @Id
@GeneratedValue(strategy = GenerationType.IDENTITY) // This annotation specifies that the id will be generated automatically
    private Long id; // Unique identifier for the admin

    private String username; // Admins username
    private String password;
    private String email;// Admins password

    // Getters and Setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }
    public void setPassword(String password) {
        this.password = password;
    }

    public String getEmail() {
        return email;
    }
    public void setEmail(String email) {
        this.email = email;
    }
}


