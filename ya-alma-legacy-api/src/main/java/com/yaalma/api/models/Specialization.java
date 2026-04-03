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
public class Specialization {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @Column(unique = true)
    private String slug;

    private String titleEn;
    private String titleAr;
    private String titleZh;
    
    @Column(columnDefinition = "TEXT")
    private String heroTaglineEn;
    
    @Column(columnDefinition = "TEXT")
    private String heroTaglineAr;
    
    @Column(columnDefinition = "TEXT")
    private String heroTaglineZh;
    
    @Column(columnDefinition = "TEXT")
    private String introEn;
    
    @Column(columnDefinition = "TEXT")
    private String introAr;
    
    @Column(columnDefinition = "TEXT")
    private String introZh;
    
    private String searchQuery;

    // Storing complex sub-lists as JSON strings
    @Column(columnDefinition = "TEXT")
    private String degreeLevelsJson;

    @Column(columnDefinition = "TEXT")
    private String topUniversitiesJson;

    @Column(columnDefinition = "TEXT")
    private String budgetUniversitiesJson;

    @Column(columnDefinition = "TEXT")
    private String courseYearsJson;

    @Column(columnDefinition = "TEXT")
    private String careerJobsEnJson;

    @Column(columnDefinition = "TEXT")
    private String careerJobsArJson;
    
    @Column(columnDefinition = "TEXT")
    private String careerJobsZhJson;

    @Column(columnDefinition = "TEXT")
    private String seVsCsJson;

    @Column(columnDefinition = "TEXT")
    private String countryComparisonsJson;

    @Column(columnDefinition = "TEXT")
    private String spotlightUniversitiesJson;
}
