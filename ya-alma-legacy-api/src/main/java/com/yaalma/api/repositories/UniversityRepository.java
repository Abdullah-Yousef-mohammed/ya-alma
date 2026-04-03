package com.yaalma.api.repositories;

import com.yaalma.api.models.University;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UniversityRepository extends JpaRepository<University, Long> {
}
