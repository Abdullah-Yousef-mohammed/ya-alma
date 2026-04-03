package com.yaalma.api.models;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
public class Translation {
    @Id
    @Column(name = "translation_key")
    private String key;

    @Column(columnDefinition = "TEXT")
    private String en;

    @Column(columnDefinition = "TEXT")
    private String ar;

    @Column(columnDefinition = "TEXT")
    private String zh;

    // Default constructor is required by JPA
    public Translation() {}

    public Translation(String key, String en, String ar, String zh) {
        this.key = key;
        this.en = en;
        this.ar = ar;
        this.zh = zh;
    }
}
