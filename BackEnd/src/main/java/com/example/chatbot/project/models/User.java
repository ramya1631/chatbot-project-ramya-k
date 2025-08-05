package com.example.chatbot.project.models;

import jakarta.persistence.*;

@Entity  // Marks this class as a JPA entity mapped to a database table
@Table(name = "users")  // Maps this entity to the "users" table in the database
public class User {

    @Id  // Primary key of the entity
    @GeneratedValue(strategy = GenerationType.IDENTITY)  // Auto-increment strategy for id generation
    private Long id;

    private String name;  // User's full name

    @Column(unique = true)  // Email must be unique in the database
    private String email;  // User's email address, used for login

    private String password;  // User's password (consider encrypting in production)

    private boolean approved;  // Flag to indicate if user is approved by admin

    // Default no-argument constructor required by JPA
    public User() {}

    // Constructor with parameters for easy object creation
    public User(String name, String email, String password, boolean approved) {
        this.name = name;
        this.email = email;
        this.password = password;
        this.approved = approved;
    }

    // --- Getters and Setters ---

    // Returns the user's ID
    public Long getId() {
        return id;
    }

    // Returns the user's name
    public String getName() {
        return name;
    }

    // Sets the user's name
    public void setName(String name) {
        this.name = name;
    }

    // Returns the user's email
    public String getEmail() {
        return email;
    }

    // Sets the user's email
    public void setEmail(String email) {
        this.email = email;
    }

    // Returns if the user is approved
    public boolean isApproved() {
        return approved;
    }

    // Sets the user's approval status
    public void setApproved(boolean approved) {
        this.approved = approved;
    }

    // Returns the user's password
    public String getPassword() {
        return password;
    }

    // Sets the user's password
    public void setPassword(String password) {
        this.password = password;
    }
}
