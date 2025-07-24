package com.example.chatbot.project.repositories;

import com.example.chatbot.project.models.Contact;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ContactRepository extends JpaRepository<Contact,Long> {

}
