package com.example.chatbot.project.controllers;

import com.example.chatbot.project.Service.AdminService;
import com.example.chatbot.project.models.Admin;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

// Allows cross-origin requests from the React frontend running on localhost:5173
@CrossOrigin(origins = "http://localhost:5173")
// Marks this class as a REST controller
@RestController
// Maps all requests starting with /api/admin to this controller
@RequestMapping("/api/admin")
public class AdminController {

    // Injecting the AdminService to handle business logic
    @Autowired
       private AdminService adminService;

    // Handles POST requests to /api/admin/login
    @PostMapping("/login")
    public String login(@RequestBody Admin admin) {
        // Attempts to find an admin with the given username and password
        Admin existingAdmin = adminService.login(admin.getUsername(), admin.getPassword());

        // If credentials are valid, return success message; otherwise, return error
        if (existingAdmin != null) {
            return "Login successful";
        } else {
            return "Invalid credentials";
        }
    }

    // Handles POST requests to /api/admin/register
    @PostMapping("/register")
    public String register(@RequestBody Admin admin) {
        // Adds a new admin using the service layer
        adminService.addAdmin(admin);

        // Return success message
        return "Admin registered successfully";
    }
}
