package com.example.chatbot.project.repositories;

import com.example.chatbot.project.models.Admin;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AdminRepository  extends JpaRepository<Admin, Long> {

}
