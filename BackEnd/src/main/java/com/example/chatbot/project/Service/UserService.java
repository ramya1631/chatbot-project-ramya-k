package com.example.chatbot.project.Service;

import com.example.chatbot.project.models.User;
import com.example.chatbot.project.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.SimpleMailMessage;

import java.util.List;
import java.util.Optional;

@Service

public class UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private JavaMailSender mailSender;

    public List<User> getAllUsers(){
        return userRepository.findAll();

    }

    public User saveUser(User user){
        Optional<User> existing =userRepository.findByEmail(user.getEmail());
        if (existing.isPresent()) {
            throw new RuntimeException("Email already registered.");
        }

        user.setApproved(false);
        User savedUser = userRepository.save(user);
        sendPendingApprovalEmail(savedUser.getEmail(), savedUser.getName());
        return savedUser;
    }


    public User approveUser(Long id) {
        Optional<User> userOptional = userRepository.findById(id);
        if (userOptional.isPresent()) {
            User user = userOptional.get();
            user.setApproved(true);
            userRepository.save(user);
            sendApprovalEmail(user.getEmail(), user.getName());
            return user;
        }
        throw new RuntimeException("User not found");
    }

    // Method to delete a user by ID
    public void deleteUser(Long id) {
        userRepository.deleteById(id);
    }

    private void sendPendingApprovalEmail(String toEmail, String userName) {
        try {
            SimpleMailMessage message = new SimpleMailMessage();
            message.setTo(toEmail);
            message.setSubject("Registration Received – Pending Approval");
            message.setText("Dear " + userName + ",\n\nThank you for registering. Your account is currently pending approval from the admin.\nYou will receive another email once your account is approved.\n\nRegards,\nAdmin Team");
            mailSender.send(message);
        } catch (Exception e) {
            throw new RuntimeException("Failed to send registration email: " + e.getMessage());
        }
    }



    private void sendApprovalEmail(String toEmail, String userName) {
        try {
            SimpleMailMessage message = new SimpleMailMessage();
            message.setTo(toEmail);
            message.setSubject("Approval Confirmation");
            message.setText("Dear " + userName + ",\n\nYour account has been approved. You can now log in.\n\nRegards,\nAdmin Team");
            mailSender.send(message);
        } catch (Exception e) {
            throw new RuntimeException("Failed to send approval email: " + e.getMessage());
        }
    }

}

