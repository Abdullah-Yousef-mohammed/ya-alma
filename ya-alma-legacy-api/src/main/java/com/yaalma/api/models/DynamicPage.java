package com.yaalma.api.models;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Column;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class DynamicPage {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    private String slug; // e.g. "about-us"
    private boolean published;
    
    // Titles
    private String titleEn;
    private String titleAr;
    private String titleZh;
    private String titleMs;
    
    // Content (Text length can be long)
    @Column(columnDefinition = "TEXT")
    private String contentEn;
    
    @Column(columnDefinition = "TEXT")
    private String contentAr;
    
    @Column(columnDefinition = "TEXT")
    private String contentZh;
    @Column(columnDefinition = "TEXT")
    private String contentMs;
}
