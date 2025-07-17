package com.example.chatbot.project.repositories;

import com.example.chatbot.project.models.Post;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PostRepository extends JpaRepository<Post, Long > {

}
