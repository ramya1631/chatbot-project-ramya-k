package com.example.chatbot.project.controllers;


import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/posts")
@CrossOrigin(origins = "http://localhost:5173")

public class PostController {
    private final PostRepository postRepo;
    private final FeedbackRepository feedbackRepo;

    public PostController(PostRepository postRepo, FeedbackRepository feedbackRepo) {
        this.postRepo = postRepo;
        this.feedbackRepo = feedbackRepo;
    }

    @GetMapping("/latest")
    public Post getLatestPost() {
        return postRepo.findAll().stream()
                .sorted((a, b) -> b.getCreatedAt().compareTo(a.getCreatedAt()))
                .findFirst()
                .orElse(null);
    }

    @PostMapping("/create")
    public Post createPost(@RequestBody Post post) {
        post.setCreatedAt(LocalDateTime.now());
        return postRepo.save(post);
    }

    @PostMapping("/feedback")
    public Feedback submitFeedback(@RequestBody FeedbackRequest request) {
        Feedback feedback = new Feedback();
        feedback.setPostId(request.getPostId());
        feedback.setFeedbackText(request.getFeedback());
        feedback.setTimestamp(LocalDateTime.now());
        return feedbackRepo.save(feedback);
    }
    @GetMapping("/all")
    public List<Post> getAllPosts() {
        return postRepo.findAll();
    }

    @GetMapping("/{postId}/feedbacks")
    public List<Feedback> getFeedbacksByPostId(@PathVariable Long postId) {
        return feedbackRepo.findAll().stream()
                .filter(fb -> fb.getPostId().equals(postId))
                .toList();
    }
    @GetMapping("/feedback/all")
    public List<Feedback> getAllFeedbacks() {
        return feedbackRepo.findAll();
    }
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deletePost(@PathVariable Long id) {
        postRepo.deleteById(id);  // assuming postRepo is your repository
        return ResponseEntity.ok().build();
    }


}





}
