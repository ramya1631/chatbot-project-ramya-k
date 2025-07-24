package com.example.chatbot.project.controllers;

import com.example.chatbot.project.models.Admin;
import com.example.chatbot.project.repositories.AdminRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/admin")
public class AdminController {

    @Autowired
    private AdminRepository adminRepository;

//http://localhost:8080/admin
    // GET: all admins
    @GetMapping
    public List<Admin> getAllAdmins() {
        return adminRepository.findAll();
    }

    // GET: admin by ID
    @GetMapping("/{id}")
    public Admin getAdminById(@PathVariable Long id) {
        return adminRepository.findById(id).orElse(null);
    }

    // POST: create new admin
    @PostMapping
    public ResponseEntity<?> createAdmin(@RequestBody Admin admin) {
        try {
            Admin saved = adminRepository.save(admin);
            return ResponseEntity.ok(saved);
        } catch (Exception e) {
            e.printStackTrace();  // Print full error stack trace in console
            return ResponseEntity
                    .badRequest()
                    .body(Map.of("error", e.getClass().getSimpleName(), "message", e.getMessage()));
        }
    }

    // PUT: update admin by ID
    @PutMapping("/{id}")
    public Admin updateAdmin(@PathVariable Long id, @RequestBody Admin updatedAdmin) {
        Optional<Admin> optionalAdmin = adminRepository.findById(id);
        if (optionalAdmin.isPresent()) {
            Admin admin = optionalAdmin.get();
            admin.setUsername(updatedAdmin.getUsername());
            admin.setPassword(updatedAdmin.getPassword());
            admin.setEmail(updatedAdmin.getEmail());
            return adminRepository.save(admin);
        }
        return null; // or throw an exception
    }

    // DELETE: delete admin by ID
    @DeleteMapping("/{id}")
    public void deleteAdmin(@PathVariable Long id) {
        adminRepository.deleteById(id);
    }
}
