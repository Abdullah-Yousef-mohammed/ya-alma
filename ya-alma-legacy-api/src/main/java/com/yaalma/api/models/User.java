package com.yaalma.api.models;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
@Table(name = "users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(unique = true, nullable = true)
    private String username;

    @Column(unique = true, nullable = true)
    private String email;

    @Column(nullable = true)
    private String password; // Will be hashed using BCrypt. Nullable for Google auth

    @Column(nullable = false)
    private String role; // "SUPER_ADMIN", "ADMIN", "EDITOR"
    
    @Column(nullable = false)
    private String provider; // "LOCAL", "GOOGLE"

    @Column(nullable = false)
    private Boolean isApproved;
}
