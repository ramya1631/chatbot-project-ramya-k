package com.example.chatbot.project.repositories;

import com.example.chatbot.project.models.Admin;
import org.springframework.data.jpa.repository.JpaRepository;



public interface AdminRespository  extends JpaRepository<Admin, Long> {

}
