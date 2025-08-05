package com.example.chatbot.project.posts;

// This class is a simple data transfer object (DTO) used to capture feedback submission requests
public class FeedbackRequest {

    private Long postId;    // ID of the post for which feedback is being submitted
    private String feedback; // The feedback text submitted by the user

    // --- Getters and Setters ---

    // Returns the post ID associated with this feedback request
    public Long getPostId() {
        return postId;
    }

    // Sets the post ID associated with this feedback request
    public void setPostId(Long postId) {
        this.postId = postId;
    }

    // Returns the feedback text submitted
    public String getFeedback() {
        return feedback;
    }

    // Sets the feedback text submitted
    public void setFeedback(String feedback) {
        this.feedback = feedback;
    }
}
