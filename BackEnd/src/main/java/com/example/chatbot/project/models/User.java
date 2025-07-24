package com.example.chatbot.project.models;

import jakarta.persistence.*;

@Entity
@Table(name = "users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;


    @Column(unique = true)
    private String email;

    private String password;

    private boolean approved;

    // No-arg constructor (required by JPA)
    public User() {}

    // Parameterized constructor
    public User(String name, String email, String password, boolean approved) {
        this.name = name;
        this.email = email;
        this.password = password;
        this.approved = approved;
    }

    // Getters and Setters
    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }


    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public boolean isApproved() {
        return approved;
    }

    public void setApproved(boolean approved) {
        this.approved = approved;
    }
}

