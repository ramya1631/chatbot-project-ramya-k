package com.example.chatbot.project.repositories;

import com.example.chatbot.project.models.Contact;
import org.springframework.data.jpa.repository.JpaRepository;

// Repository interface for Contact entity extending JpaRepository to provide CRUD operations
public interface ContactRepository extends JpaRepository<Contact, Long> {

}
