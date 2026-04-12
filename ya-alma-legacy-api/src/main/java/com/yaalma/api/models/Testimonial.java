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
public class Testimonial {
    public Testimonial(Long id, String studentName, String studentNameZh, String universityName, String universityNameAr, String universityNameZh, String reviewText, String reviewTextAr, String reviewTextZh, Integer rating) {
        this.id = id; this.studentName = studentName; this.studentNameZh = studentNameZh; this.universityName = universityName; this.universityNameAr = universityNameAr; this.universityNameZh = universityNameZh; this.reviewText = reviewText; this.reviewTextAr = reviewTextAr; this.reviewTextZh = reviewTextZh; this.rating = rating;
    }
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    private String studentName;
    private String studentNameZh;
    private String studentNameMs;
    private String universityName;
    private String universityNameAr;
    private String universityNameZh;
    private String universityNameMs;
    private String reviewText;
    private String reviewTextAr;
    private String reviewTextZh;
    private String reviewTextMs;
    private Integer rating;
}
