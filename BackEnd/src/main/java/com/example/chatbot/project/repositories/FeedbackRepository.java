package com.example.chatbot.project.repositories;

import com.example.chatbot.project.posts.Feedback;
import org.springframework.data.jpa.repository.JpaRepository;

// Repository interface for Feedback entity, extends JpaRepository to provide CRUD operations
public interface FeedbackRepository extends JpaRepository<Feedback, Long> {

}
