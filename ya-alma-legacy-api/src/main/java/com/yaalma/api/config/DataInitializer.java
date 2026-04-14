package com.yaalma.api.config;

import com.yaalma.api.models.User;
import com.yaalma.api.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import java.util.Optional;

@Component
public class DataInitializer implements CommandLineRunner {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Override
    public void run(String... args) throws Exception {
        Optional<User> adminOpt = userRepository.findByUsername("admin");
        if (adminOpt.isEmpty()) {
            User admin = new User();
            admin.setUsername("admin");
            // Store the BCrypt hashed version of "Alma2024!"
            admin.setPassword(passwordEncoder.encode("Alma2024!"));
            admin.setRole("ADMIN");
            admin.setProvider("LOCAL");
            admin.setIsApproved(true);
            userRepository.save(admin);
            System.out.println("Default admin user created.");
        }
    }
}
