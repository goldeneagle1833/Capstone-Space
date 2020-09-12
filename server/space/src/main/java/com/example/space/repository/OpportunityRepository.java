package com.example.space.repository;

import com.example.space.model.Opportunity;
import org.springframework.data.repository.CrudRepository;

public interface OpportunityRepository extends CrudRepository<Opportunity, Long> {
}
