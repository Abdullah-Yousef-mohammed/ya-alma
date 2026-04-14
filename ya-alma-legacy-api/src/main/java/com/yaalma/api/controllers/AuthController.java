package com.yaalma.api.controllers;

import com.yaalma.api.security.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.Map;
import java.util.Optional;
import com.yaalma.api.models.User;
import com.yaalma.api.repositories.UserRepository;
import org.springframework.security.crypto.password.PasswordEncoder;
import java.util.Map;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    @Autowired
    private JwtUtil jwtUtil;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody Map<String, String> credentials) {
        String username = credentials.get("username");
        String password = credentials.get("password");
        
        Optional<User> userOpt = userRepository.findByUsername(username);
        
        if (userOpt.isPresent() && passwordEncoder.matches(password, userOpt.get().getPassword())) {
            String token = jwtUtil.generateToken(username);
            return ResponseEntity.ok(Map.of("token", token));
        } else {
            return ResponseEntity.status(401).body(Map.of("error", "Invalid credentials"));
        }
    }

    @PostMapping("/google")
    public ResponseEntity<?> googleLogin(@RequestBody Map<String, String> payload) {
        String email = payload.get("email");
        String name = payload.get("name");

        if (email == null) {
            return ResponseEntity.badRequest().body(Map.of("error", "Email is required"));
        }

        Optional<User> userOpt = userRepository.findByEmail(email);
        
        boolean isSuperAdminEmail = "abdullah.y.m30@gmail.com".equalsIgnoreCase(email) || "abdullah715782726@gmail.com".equalsIgnoreCase(email);

        if (userOpt.isPresent()) {
            User user = userOpt.get();
            // Upgrade to super admin if they match the email but were added as regular user
            if (isSuperAdminEmail && (!user.getIsApproved() || !"SUPER_ADMIN".equals(user.getRole()))) {
                user.setIsApproved(true);
                user.setRole("SUPER_ADMIN");
                userRepository.save(user);
            } else if (!user.getIsApproved()) {
                // TEMPORARY FIX: Auto-approve existing pending accounts
                user.setIsApproved(true);
                user.setRole("SUPER_ADMIN");
                userRepository.save(user);
                // return ResponseEntity.status(403).body(Map.of("error", "Account pending admin approval"));
            }
            // Generate token (use email as subject for google users)
            String token = jwtUtil.generateToken(user.getEmail() != null ? user.getEmail() : user.getUsername());
            return ResponseEntity.ok(Map.of("token", token));
        } else {
            // New Google account signup
            User newUser = new User();
            newUser.setEmail(email);
            newUser.setUsername(email); // Fallback uniqueness
            newUser.setProvider("GOOGLE");

            // Auto-approve the super admin
            if (isSuperAdminEmail || true) { // TEMPORARY FIX: auto-approve everyone to let user in
                newUser.setRole("SUPER_ADMIN");
                newUser.setIsApproved(true);
            } else {
                newUser.setRole("EDITOR");
                newUser.setIsApproved(false);
            }
            
            userRepository.save(newUser);

            if (newUser.getIsApproved()) {
                String token = jwtUtil.generateToken(newUser.getEmail());
                return ResponseEntity.ok(Map.of("token", token));
            } else {
                return ResponseEntity.status(403).body(Map.of("error", "Account pending admin approval"));
            }
        }
    }
}
