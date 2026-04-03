package com.yaalma.api.repositories;

import com.yaalma.api.models.Course;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface CourseRepository extends JpaRepository<Course, Long> {
    List<Course> findByUniversityId(Long universityId);
}
