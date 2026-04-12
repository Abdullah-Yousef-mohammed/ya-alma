package com.yaalma.api.models;

import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class BlogPost {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;
    private String titleAr;
    private String titleZh;
    private String titleMs;

    private String category;
    private String categoryAr;
    private String categoryZh;
    private String categoryMs;

    private String date;
    private String imageUrl;
    
    private String videoUrl;
    private String videoUrlAr;
    private String videoUrlZh;
    private String videoUrlMs;

    @Column(columnDefinition = "TEXT")
    private String excerpt;
    
    @Column(columnDefinition = "TEXT")
    private String excerptAr;

    @Column(columnDefinition = "TEXT")
    private String excerptZh;
    @Column(columnDefinition = "TEXT")
    private String excerptMs;

    @Column(columnDefinition = "TEXT")
    private String contentEn;

    @Column(columnDefinition = "TEXT")
    private String contentAr;

    @Column(columnDefinition = "TEXT")
    private String contentZh;
    @Column(columnDefinition = "TEXT")
    private String contentMs;

    private Boolean published;
}
