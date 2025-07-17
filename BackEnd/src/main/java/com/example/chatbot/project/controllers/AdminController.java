package com.example.chatbot.project.controllers;

import com.example.chatbot.project.repositories.AdminRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


    @RestController
    @RequestMapping("/admin")
    public class AdminController {

 @Autowired
        private AdminRepository adminRepository;
 //GET the full list of admins
        //Endpoint is
@GetMapping
        public String getAdminPage() {
            return "Welcome to the Admin Page!";
        }
@PostMapping("/add")
        public String addAdmin() {
            // Logic to add an admin
            return "Admin added successfully!";
        }


    }

}
