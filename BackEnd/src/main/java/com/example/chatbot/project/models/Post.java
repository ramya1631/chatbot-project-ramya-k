package com.example.chatbot.project.models;

import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity  // Marks this class as a JPA entity mapped to a database table
public class Post {

    @Id  // Marks the field as the primary key
    @GeneratedValue(strategy = GenerationType.IDENTITY)  // Auto-increment primary key generation
    private Long id;

    private String title;  // Title of the post

    @Column(columnDefinition = "TEXT")  // Maps content to a TEXT column for large text storage
    private String content;

    // Stores the creation timestamp of the post
    // Initialized with the current time by default when a new Post is created
    private LocalDateTime createdAt = LocalDateTime.now();

    // --- Getters and Setters ---

    // Returns the ID of the post
    public Long getId() {
        return id;
    }

    // Sets the ID of the post (usually used by JPA)
    public void setId(Long id) {
        this.id = id;
    }

    // Returns the title of the post
    public String getTitle() {
        return title;
    }

    // Sets the title of the post
    public void setTitle(String title) {
        this.title = title;
    }

    // Returns the content/body of the post
    public String getContent() {
        return content;
    }

    // Sets the content/body of the post
    public void setContent(String content) {
        this.content = content;
    }

    // Returns the date and time the post was created
    public LocalDateTime getCreatedAt() {
        return createdAt;
    }

    // Sets the creation date/time of the post
    public void setCreatedAt(LocalDateTime createdAt) {
        this.createdAt = createdAt;
    }
}
