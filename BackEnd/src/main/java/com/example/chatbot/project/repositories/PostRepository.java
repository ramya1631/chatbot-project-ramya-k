package com.example.chatbot.project.repositories;

import com.example.chatbot.project.models.Post;
import org.springframework.data.jpa.repository.JpaRepository;

// Repository interface for Post entity, extending JpaRepository to provide CRUD operations
public interface PostRepository extends JpaRepository<Post, Long> {
    // Basic CRUD operations are available through JpaRepository
}
