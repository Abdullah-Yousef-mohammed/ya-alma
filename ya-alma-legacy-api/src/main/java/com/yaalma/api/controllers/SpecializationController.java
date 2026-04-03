package com.yaalma.api.controllers;

import com.yaalma.api.models.Specialization;
import com.yaalma.api.repositories.SpecializationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/specializations")
public class SpecializationController {

    @Autowired
    private SpecializationRepository repository;

    @GetMapping
    public List<Specialization> getAll() {
        return repository.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Specialization> getById(@PathVariable Long id) {
        return repository.findById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @GetMapping("/slug/{slug}")
    public ResponseEntity<Specialization> getBySlug(@PathVariable String slug) {
        return repository.findBySlug(slug)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public Specialization create(@RequestBody Specialization sp) {
        return repository.save(sp);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Specialization> update(@PathVariable Long id, @RequestBody Specialization spDetails) {
        return repository.findById(id)
                .map(sp -> {
                    sp.setSlug(spDetails.getSlug());
                    sp.setTitleEn(spDetails.getTitleEn());
                    sp.setTitleAr(spDetails.getTitleAr());
                    sp.setTitleZh(spDetails.getTitleZh());
                    sp.setHeroTaglineEn(spDetails.getHeroTaglineEn());
                    sp.setHeroTaglineAr(spDetails.getHeroTaglineAr());
                    sp.setHeroTaglineZh(spDetails.getHeroTaglineZh());
                    sp.setIntroEn(spDetails.getIntroEn());
                    sp.setIntroAr(spDetails.getIntroAr());
                    sp.setIntroZh(spDetails.getIntroZh());
                    sp.setSearchQuery(spDetails.getSearchQuery());
                    sp.setDegreeLevelsJson(spDetails.getDegreeLevelsJson());
                    sp.setTopUniversitiesJson(spDetails.getTopUniversitiesJson());
                    sp.setBudgetUniversitiesJson(spDetails.getBudgetUniversitiesJson());
                    sp.setCourseYearsJson(spDetails.getCourseYearsJson());
                    sp.setCareerJobsEnJson(spDetails.getCareerJobsEnJson());
                    sp.setCareerJobsArJson(spDetails.getCareerJobsArJson());
                    sp.setCareerJobsZhJson(spDetails.getCareerJobsZhJson());
                    sp.setSeVsCsJson(spDetails.getSeVsCsJson());
                    sp.setCountryComparisonsJson(spDetails.getCountryComparisonsJson());
                    sp.setSpotlightUniversitiesJson(spDetails.getSpotlightUniversitiesJson());
                    return ResponseEntity.ok(repository.save(sp));
                })
                .orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> delete(@PathVariable Long id) {
        return repository.findById(id)
                .map(sp -> {
                    repository.delete(sp);
                    return ResponseEntity.ok().build();
                })
                .orElse(ResponseEntity.notFound().build());
    }
}
