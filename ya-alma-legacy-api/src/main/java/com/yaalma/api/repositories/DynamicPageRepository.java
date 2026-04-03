package com.yaalma.api.repositories;

import com.yaalma.api.models.DynamicPage;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface DynamicPageRepository extends JpaRepository<DynamicPage, Long> {
    Optional<DynamicPage> findBySlug(String slug);
}
