package com.example.space.service;

import com.example.space.model.Opportunity;
import org.springframework.http.HttpStatus;

public interface OpportunityService {
    Iterable<Opportunity> listOpportunity();
    Opportunity createOpportunity(Opportunity opportunity);
    Opportunity getOpportunityById(Long id);
    HttpStatus deleteOpportunityById(Long id);
}
