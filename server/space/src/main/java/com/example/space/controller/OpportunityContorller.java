package com.example.space.controller;

import com.example.space.model.Opportunity;
import com.example.space.service.OpportunityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

public class OpportunityContorller {

    @Autowired
    OpportunityService opportunityService;

    @GetMapping
    public Iterable<Opportunity> listAllOpportunity(){
        return opportunityService.listOpportunity();
    }

    @PostMapping
    public Opportunity createOpportunity(@RequestBody Opportunity opportunity){
        return opportunityService.createOpportunity(opportunity);
    }

    @GetMapping("/{id}")
    public Opportunity getOpportunityById(@PathVariable Long id){
        return opportunityService.getOpportunityById(id);
    }

    @DeleteMapping("/{id}")
    public HttpStatus deleteSpirtById(@PathVariable Long id){
        return opportunityService.deleteOpportunityById(id);
    }
}
