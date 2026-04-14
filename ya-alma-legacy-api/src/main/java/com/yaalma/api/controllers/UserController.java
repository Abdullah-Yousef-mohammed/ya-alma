package com.yaalma.api.controllers;

import com.yaalma.api.models.User;
import com.yaalma.api.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import org.springframework.security.crypto.password.PasswordEncoder;
import java.util.List;
import java.util.Optional;
import java.util.Map;

@RestController
@RequestMapping("/api/users")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @GetMapping
    public ResponseEntity<List<User>> getAllUsers() {
        return ResponseEntity.ok(userRepository.findAll());
    }

    @PutMapping("/{id}/approve")
    public ResponseEntity<?> approveUser(@PathVariable Long id) {
        Optional<User> userOpt = userRepository.findById(id);
        if (userOpt.isPresent()) {
            User user = userOpt.get();
            user.setIsApproved(true);
            userRepository.save(user);
            return ResponseEntity.ok(user);
        }
        return ResponseEntity.notFound().build();
    }

    @PostMapping
    public ResponseEntity<?> createUser(@RequestBody Map<String, String> payload) {
        if (userRepository.findByUsername(payload.get("username")).isPresent()) {
             return ResponseEntity.badRequest().body(Map.of("error", "Username already exists"));
        }
        User user = new User();
        user.setUsername(payload.get("username"));
        user.setEmail(payload.get("email"));
        user.setRole(payload.get("role"));
        user.setProvider("LOCAL");
        user.setIsApproved(Boolean.parseBoolean(payload.getOrDefault("isApproved", "true")));
        user.setPassword(passwordEncoder.encode(payload.get("password")));
        userRepository.save(user);
        return ResponseEntity.ok(user);
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> updateUser(@PathVariable Long id, @RequestBody Map<String, String> payload) {
        Optional<User> userOpt = userRepository.findById(id);
        if (userOpt.isPresent()) {
            User user = userOpt.get();
            if (payload.containsKey("username")) user.setUsername(payload.get("username"));
            if (payload.containsKey("email")) user.setEmail(payload.get("email"));
            if (payload.containsKey("role")) user.setRole(payload.get("role"));
            if (payload.containsKey("isApproved")) user.setIsApproved(Boolean.parseBoolean(payload.get("isApproved")));
            
            // Only update password if a new one was provided
            if (payload.containsKey("password") && !payload.get("password").isEmpty()) {
                user.setPassword(passwordEncoder.encode(payload.get("password")));
            }
            
            userRepository.save(user);
            return ResponseEntity.ok(user);
        }
        return ResponseEntity.notFound().build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteUser(@PathVariable Long id) {
        if (userRepository.existsById(id)) {
            userRepository.deleteById(id);
            return ResponseEntity.ok().build();
        }
        return ResponseEntity.notFound().build();
    }
}
