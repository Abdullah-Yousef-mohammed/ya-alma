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
    public LanguageProgram(Long id, String titleEn, String titleAr, String titleZh, String durationEn, String durationAr, String durationZh, String levelEn, String levelAr, String levelZh, String intakesEn, String intakesAr, String intakesZh, Integer feeMyr, Long languageCenterId) {
        this.id = id; this.titleEn = titleEn; this.titleAr = titleAr; this.titleZh = titleZh; this.durationEn = durationEn; this.durationAr = durationAr; this.durationZh = durationZh; this.levelEn = levelEn; this.levelAr = levelAr; this.levelZh = levelZh; this.intakesEn = intakesEn; this.intakesAr = intakesAr; this.intakesZh = intakesZh; this.feeMyr = feeMyr; this.languageCenterId = languageCenterId;
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    // Core details
    private String titleEn;
    private String titleAr;
    private String titleZh;
    private String titleMs;
    
    // Parameters
    private String durationEn; 
    private String durationAr;
    private String durationZh;
    private String durationMs;

    private String levelEn; 
    private String levelAr;
    private String levelZh;
    private String levelMs;
    
    private String intakesEn; 
    private String intakesAr;
    private String intakesZh; 
    private String intakesMs; 

    // Financials
    private Integer feeMyr;

    // Relational Identity
    private Long languageCenterId;
}
