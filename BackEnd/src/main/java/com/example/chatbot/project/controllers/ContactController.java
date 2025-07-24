package com.example.chatbot.project.controllers;

import java.util.List;

import com.example.chatbot.project.models.Contact;
import com.example.chatbot.project.repositories.ContactRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/contacts")
@CrossOrigin(origins = "http://localhost:5173")


public class ContactController {
    @Autowired
    private ContactRepository contactRepository;

    @PostMapping
    public ResponseEntity<?> submitContact(@RequestBody Contact contact) {
        Contact saved = contactRepository.save(contact);
        System.out.println("Contact saved: " + saved.getId());
        return ResponseEntity.ok(saved);
    }


    @GetMapping
    public List<Contact> getAllContacts() {

        return contactRepository.findAll();
    }
    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteContact(@PathVariable Long id) {
        contactRepository.deleteById(id);
        return ResponseEntity.ok("Deleted");
    }


}
