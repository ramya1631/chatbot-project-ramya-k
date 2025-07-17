package com.example.chatbot.project.repositories;

import com.example.chatbot.project.models.Student;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StudentRepository extends JpaRepository<Student, Long> {
}
