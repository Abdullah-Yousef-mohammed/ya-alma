package com.yaalma.api.repositories;

import com.yaalma.api.models.Specialization;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface SpecializationRepository extends JpaRepository<Specialization, Long> {
    Optional<Specialization> findBySlug(String slug);
}
