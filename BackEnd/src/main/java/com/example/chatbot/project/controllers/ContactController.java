package com.example.chatbot.project.controllers;

import java.util.List;
import com.example.chatbot.project.models.Contact;
import com.example.chatbot.project.repositories.ContactRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/contacts") // All endpoints will start with /api/contacts
@CrossOrigin(origins = "http://localhost:5173") // Allows frontend (React app running at port 5173) to access these APIs
public class ContactController {

    @Autowired // Injects an instance of ContactRepository to interact with the database
    private ContactRepository contactRepository;

    // POST endpoint to save a contact form submission
    @PostMapping
    public ResponseEntity<?> submitContact(@RequestBody Contact contact) {
        // Save the contact object to the database
        Contact saved = contactRepository.save(contact);
        System.out.println("Contact saved: " + saved.getId()); // Log saved contact ID
        return ResponseEntity.ok(saved); // Return the saved contact with HTTP 200 OK
    }

    // GET endpoint to return all contact submissions from the database
    @GetMapping
    public List<Contact> getAllContacts() {
        return contactRepository.findAll(); // Retrieve and return all contacts
    }

    // DELETE endpoint to remove a contact entry by ID
    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteContact(@PathVariable Long id) {
        contactRepository.deleteById(id); // Delete contact with the given ID
        return ResponseEntity.ok("Deleted"); // Return confirmation message
    }

}
