package com.example.chatbot.project.controllers;

import com.example.chatbot.project.models.Post;
import com.example.chatbot.project.posts.Feedback;
import com.example.chatbot.project.posts.FeedbackRequest;
import com.example.chatbot.project.repositories.FeedbackRepository;
import com.example.chatbot.project.repositories.PostRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.List;

/**
 * REST Controller for managing Posts and Feedback in the system.
 * This controller handles creating posts, submitting feedback, and retrieving post/feedback data.
 */
@RestController
@RequestMapping("/api/posts")
@CrossOrigin(origins = "http://localhost:5173") // Allow frontend to access backend (CORS policy)
public class PostController {

    private final PostRepository postRepo;
    private final FeedbackRepository feedbackRepo;

    // Constructor-based dependency injection of repositories
    public PostController(PostRepository postRepo, FeedbackRepository feedbackRepo) {
        this.postRepo = postRepo;
        this.feedbackRepo = feedbackRepo;
    }

    /**
     * Get the most recent post based on creation timestamp.
     * @return the latest Post object or null if none exist.
     */
    @GetMapping("/latest")
    public Post getLatestPost() {
        return postRepo.findAll().stream()
                .sorted((a, b) -> b.getCreatedAt().compareTo(a.getCreatedAt()))
                .findFirst()
                .orElse(null);
    }

    /**
     * Create a new post.
     * @param post the Post object sent from frontend.
     * @return the saved Post object with timestamp.
     */
    @PostMapping("/create")
    public Post createPost(@RequestBody Post post) {
        post.setCreatedAt(LocalDateTime.now()); // Set current timestamp
        return postRepo.save(post);
    }

    /**
     * Submit feedback for a specific post.
     * @param request a wrapper object containing postId and feedback text.
     * @return the saved Feedback object.
     */
    @PostMapping("/feedback")
    public Feedback submitFeedback(@RequestBody FeedbackRequest request) {
        Feedback feedback = new Feedback();
        feedback.setPostId(request.getPostId());
        feedback.setFeedbackText(request.getFeedback());
        feedback.setTimestamp(LocalDateTime.now());
        return feedbackRepo.save(feedback);
    }

    /**
     * Retrieve all posts in the system.
     * @return a list of all Post objects.
     */
    @GetMapping("/all")
    public List<Post> getAllPosts() {
        return postRepo.findAll();
    }

    /**
     * Get all feedback associated with a specific post.
     * @param postId the ID of the post.
     * @return a list of Feedback objects for the given post.
     */
    @GetMapping("/{postId}/feedbacks")
    public List<Feedback> getFeedbacksByPostId(@PathVariable Long postId) {
        return feedbackRepo.findAll().stream()
                .filter(fb -> fb.getPostId().equals(postId))
                .toList(); // Filter feedbacks by post ID
    }

    /**
     * Retrieve all feedback entries in the system.
     * @return a list of all Feedback objects.
     */
    @GetMapping("/feedback/all")
    public List<Feedback> getAllFeedbacks() {
        return feedbackRepo.findAll();
    }

    /**
     * Delete a post by its ID.
     * @param id the ID of the post to delete.
     * @return HTTP 200 OK response if successful.
     */
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deletePost(@PathVariable Long id) {
        postRepo.deleteById(id);
        return ResponseEntity.ok().build(); // Send empty 200 OK response
    }
}
