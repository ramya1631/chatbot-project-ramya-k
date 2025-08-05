package com.example.chatbot.project.repositories;

import com.example.chatbot.project.models.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

// Repository interface for User entity, extends JpaRepository to provide standard CRUD methods
public interface UserRepository extends JpaRepository<User, Long> {

    // Custom query method to find a user by their email address
    // Returns an Optional<User> to handle the possibility that no user is found with the given email
    Optional<User> findByEmail(String email);

}
