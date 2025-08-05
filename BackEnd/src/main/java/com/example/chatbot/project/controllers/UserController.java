package com.example.chatbot.project.controllers;

import com.example.chatbot.project.Service.UserService;
import com.example.chatbot.project.models.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@RestController
@RequestMapping("/api/users")
@CrossOrigin(origins = "http://localhost:5173") // Allow requests from React frontend running at this port
public class UserController {

    @Autowired
    private UserService userService;

    //  GET all users
    // This endpoint returns the full list of users (admin use case).
    @GetMapping
    public List<User> getAllUsers() {
        return userService.getAllUsers();
    }

    //  REGISTER new user
    // This endpoint registers a new user and sets their approved status to false by default.
    @PostMapping("/register")
    public ResponseEntity<?> registerUser(@RequestBody User user) {
        try {
            user.setApproved(false); // New users must be approved by an admin
            userService.saveUser(user);
            return ResponseEntity.ok(Collections.singletonMap("status", "registered"));
        } catch (RuntimeException e) {
            // Validation or business logic failure
            return ResponseEntity
                    .status(400)
                    .body(Map.of("status", "error", "message", e.getMessage()));
        } catch (Exception e) {
            // Other unhandled errors
            return ResponseEntity
                    .status(500)
                    .body(Map.of("status", "error", "message", "Unexpected error occurred"));
        }
    }

    //  LOGIN user
    // Validates login credentials and checks approval status
    @PostMapping("/login")
    public ResponseEntity<?> loginUser(@RequestBody Map<String, String> credentials) {
        String email = credentials.get("email");
        String password = credentials.get("password");

        // Find a user with matching email and password
        Optional<User> userOptional = userService.getAllUsers().stream()
                .filter(u -> u.getEmail().equals(email) && u.getPassword().equals(password))
                .findFirst();

        if (userOptional.isPresent()) {
            User user = userOptional.get();
            if (user.isApproved()) {
                // Successful login for approved user
                Map<String, Object> response = new HashMap<>();
                response.put("status", "success");
                response.put("user", user);
                return ResponseEntity.ok(response);
            } else {
                // User exists but not yet approved
                return ResponseEntity.ok(Collections.singletonMap("status", "pending"));
            }
        } else {
            // Invalid credentials
            return ResponseEntity.ok(Collections.singletonMap("status", "error"));
        }
    }

    // APPROVE user
    // This allows an admin to approve a user by ID
    @PutMapping("/approve/{id}")
    public ResponseEntity<?> approveUser(@PathVariable Long id) {
        try {
            User approvedUser = userService.approveUser(id);
            return ResponseEntity.ok(approvedUser);
        } catch (RuntimeException e) {
            // User with given ID not found
            return ResponseEntity.notFound().build();
        }
    }

    //  DELETE user
    // Deletes a user by ID (admin only functionality)
    @DeleteMapping("/{id}")
    public void deleteUser(@PathVariable Long id) {
        userService.deleteUser(id);
    }
}
