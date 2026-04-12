package com.yaalma.api.models;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Course {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    // Core details
    private String titleEn;
    private String titleAr;
    private String titleZh;
    private String titleMs;
    
    // Grouping Category (replaces the old Faculty model)
    private String facultyEn; 
    private String facultyAr;
    private String facultyZh;
    private String facultyMs;

    // Academic Path Parameters
    private String level; 
    private String levelAr;
    private String levelZh;
    private String levelMs;
    
    private String duration; 
    private String durationAr;
    private String durationZh;
    private String durationMs;

    private String intakes; 
    private String intakesAr;
    private String intakesZh; 
    private String intakesMs; 

    // Financials
    private Integer feeMyr;

    // Relational Identity (For Control Panel & Frontend Filtering)
    private Long universityId;
    private String universityName;
    private String universityNameAr;
    private String universityNameZh;
    private String universityNameMs;

    // Helper Constructor for Seeders
    public Course(Long id, String titleEn, String titleAr, String titleZh, String facultyEn, String facultyAr, String facultyZh, String level, String levelAr, String levelZh, String duration, String durationAr, String durationZh, String intakes, Integer feeMyr, Long universityId, String universityName) {
        this.id = id;
        this.titleEn = titleEn;
        this.titleAr = titleAr;
        this.titleZh = titleZh;
        this.facultyEn = facultyEn;
        this.facultyAr = facultyAr;
        this.facultyZh = facultyZh;
        this.level = level;
        this.levelAr = levelAr;
        this.levelZh = levelZh;
        this.duration = duration;
        this.durationAr = durationAr;
        this.durationZh = durationZh;
        this.intakes = intakes;
        this.feeMyr = feeMyr;
        this.universityId = universityId;
        this.universityName = universityName;
    }
}
