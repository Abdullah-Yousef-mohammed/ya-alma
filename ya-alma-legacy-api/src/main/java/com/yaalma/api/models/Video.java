package com.yaalma.api.models;

import jakarta.persistence.*;

@Entity
@Table(name = "videos")
public class Video {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String titleEn;
    private String titleAr;
    private String titleZh;

    @Column(columnDefinition = "TEXT")
    private String youtubeUrl;

    @Column(columnDefinition = "TEXT")
    private String thumbnailUrl;

    private int sortOrder;
    private boolean isPublic = true;

    public Video() {
    }

    public Video(String titleEn, String titleAr, String titleZh, String youtubeUrl, String thumbnailUrl, int sortOrder) {
        this.titleEn = titleEn;
        this.titleAr = titleAr;
        this.titleZh = titleZh;
        this.youtubeUrl = youtubeUrl;
        this.thumbnailUrl = thumbnailUrl;
        this.sortOrder = sortOrder;
        this.isPublic = true;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitleEn() {
        return titleEn;
    }

    public void setTitleEn(String titleEn) {
        this.titleEn = titleEn;
    }

    public String getTitleAr() {
        return titleAr;
    }

    public void setTitleAr(String titleAr) {
        this.titleAr = titleAr;
    }

    public String getTitleZh() {
        return titleZh;
    }

    public void setTitleZh(String titleZh) {
        this.titleZh = titleZh;
    }

    public String getYoutubeUrl() {
        return youtubeUrl;
    }

    public void setYoutubeUrl(String youtubeUrl) {
        this.youtubeUrl = youtubeUrl;
    }

    public String getThumbnailUrl() {
        return thumbnailUrl;
    }

    public void setThumbnailUrl(String thumbnailUrl) {
        this.thumbnailUrl = thumbnailUrl;
    }

    public int getSortOrder() {
        return sortOrder;
    }

    public void setSortOrder(int sortOrder) {
        this.sortOrder = sortOrder;
    }

    public boolean isPublic() {
        return isPublic;
    }

    public void setPublic(boolean isPublic) {
        this.isPublic = isPublic;
    }
}
