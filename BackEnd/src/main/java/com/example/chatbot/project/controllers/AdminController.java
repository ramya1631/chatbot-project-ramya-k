package com.example.chatbot.project.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


    @RestController
    @RequestMapping("/admin")
    public class AdminController {

 @Autowired
        private AdminRepository adminRepository;

private  final String adminEndpoint="adminEndpoint = ("/admin") ;


    }

}
