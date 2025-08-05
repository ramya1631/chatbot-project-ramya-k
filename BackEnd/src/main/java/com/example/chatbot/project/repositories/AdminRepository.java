package com.example.chatbot.project.repositories;

import com.example.chatbot.project.models.Admin;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

// Repository interface for Admin entity extending JpaRepository to provide CRUD operations
public interface AdminRepository extends JpaRepository<Admin, Long> {

    // Custom query method to find an Admin by username and password
    // Returns the matching Admin if found, else null
    Admin findByUsernameAndPassword(String username, String password);

}
