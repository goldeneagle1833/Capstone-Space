package com.example.space.service;

import com.example.space.model.Opportunity;
import com.example.space.repository.OpportunityRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;


@Service
public class OpportuniyServiceImpl implements OpportunityService {

    @Autowired
    OpportunityRepository opportunityRepository;


    @Override
    public Iterable<Opportunity> listOpportunity() {
        return opportunityRepository.findAll();
    }

    @Override
    public Opportunity createOpportunity(Opportunity opportunity) {
        return opportunityRepository.save(opportunity);
    }

    @Override
    public Opportunity getOpportunityById(Long id) {
        return opportunityRepository.findById(id).get();
    }

    @Override
    public HttpStatus deleteOpportunityById(Long id) {
        opportunityRepository.deleteById(id);
        return HttpStatus.OK;
    }
}
