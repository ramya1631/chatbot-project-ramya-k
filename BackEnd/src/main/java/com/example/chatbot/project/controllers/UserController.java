package com.example.chatbot.project.controllers;

import com.example.chatbot.project.Service.UserService;
import com.example.chatbot.project.models.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/users")
@CrossOrigin(origins = "http://localhost:5173")
public class UserController {

    @Autowired
    private UserService userService;

    // Endpoint to get all users
//http://localhost:8080/api/users/register



    @GetMapping
    public List<User> getAllUsers() {
        return userService.getAllUsers();
    }
    // Endpoint to register a new user

    @PostMapping("/register")
    public ResponseEntity<?> registerUser(@RequestBody User user) {
        try {
            user.setApproved(false); // pending by default
            userService.saveUser(user);
            return ResponseEntity.ok(Map.of("status", "registered"));
        } catch (RuntimeException e) {
            // Return the specific error message (e.g., "Email already registered.")
            return ResponseEntity
                .status(400)
                .body(Map.of(
                    "status", "error",
                    "message", e.getMessage()
                ));
        } catch (Exception e) {
            // Catch-all for unknown errors
            return ResponseEntity
                .status(500)
                .body(Map.of(
                    "status", "error",
                    "message", "Unexpected error occurred"
                ));
        }
    }

}
