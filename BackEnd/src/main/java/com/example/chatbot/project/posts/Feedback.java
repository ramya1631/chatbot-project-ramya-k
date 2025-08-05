package com.example.chatbot.project.posts;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

import java.time.LocalDateTime;

@Entity  // Marks this class as a JPA entity mapped to a database table
public class Feedback {

    @Id  // Primary key of the entity
    @GeneratedValue(strategy = GenerationType.IDENTITY)  // Auto-increment ID generation
    private Long id;

    private Long postId;  // ID of the post this feedback belongs to

    private String feedbackText;  // Text content of the feedback

    private LocalDateTime timestamp;  // Timestamp when feedback was submitted

    // --- Getters and Setters ---

    // Returns feedback ID
    public Long getId() {
        return id;
    }

    // Returns the post ID associated with this feedback
    public Long getPostId() {
        return postId;
    }

    // Sets the post ID this feedback is related to
    public void setPostId(Long postId) {
        this.postId = postId;
    }

    // Returns the feedback text
    public String getFeedbackText() {
        return feedbackText;
    }

    // Sets the feedback text content
    public void setFeedbackText(String feedbackText) {
        this.feedbackText = feedbackText;
    }

    // Returns the timestamp of when the feedback was created
    public LocalDateTime getTimestamp() {
        return timestamp;
    }

    // Sets the timestamp of the feedback creation
    public void setTimestamp(LocalDateTime timestamp) {
        this.timestamp = timestamp;
    }
}
