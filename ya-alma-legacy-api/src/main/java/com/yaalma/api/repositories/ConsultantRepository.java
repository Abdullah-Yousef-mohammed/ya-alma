package com.yaalma.api.repositories;

import com.yaalma.api.models.Consultant;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ConsultantRepository extends JpaRepository<Consultant, Long> {
}
