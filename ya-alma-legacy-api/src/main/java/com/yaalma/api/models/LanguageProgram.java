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
public class LanguageProgram {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    // Core details
    private String titleEn;
    private String titleAr;
    private String titleZh;
    
    // Parameters
    private String durationEn; 
    private String durationAr;
    private String durationZh;

    private String levelEn; 
    private String levelAr;
    private String levelZh;
    
    private String intakesEn; 
    private String intakesAr;
    private String intakesZh; 

    // Financials
    private Integer feeMyr;

    // Relational Identity
    private Long languageCenterId;
}
