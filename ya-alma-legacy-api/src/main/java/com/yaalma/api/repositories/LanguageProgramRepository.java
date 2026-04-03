package com.yaalma.api.repositories;

import com.yaalma.api.models.LanguageProgram;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface LanguageProgramRepository extends JpaRepository<LanguageProgram, Long> {
    List<LanguageProgram> findByLanguageCenterId(Long languageCenterId);
}
