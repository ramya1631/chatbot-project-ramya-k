package com.example.chatbot.project.repositories;

import com.example.chatbot.project.models.Chat;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ChatRepository extends JpaRepository<Chat, Long> {

}
