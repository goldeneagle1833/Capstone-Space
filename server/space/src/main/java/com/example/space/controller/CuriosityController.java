package com.example.space.controller;

import com.example.space.model.Curiosity;
import com.example.space.model.Opportunity;
import com.example.space.service.CuriosityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/curiosity")
public class CuriosityController {
    @Autowired
    CuriosityService curiosityService;

    @GetMapping
    public Iterable<Curiosity> listAllCuriosity(){
        return curiosityService.listCuriosity();
    }

    @PostMapping
    public Curiosity createCurosity(@RequestBody Curiosity curiosity){
        return curiosityService.createCuriosity(curiosity);
    }

    @GetMapping("/{id}")
    public Curiosity getCuriosityById(@PathVariable Long id){
        return curiosityService.getCuriosityById(id);
    }

    @DeleteMapping("/{id}")
    public HttpStatus deleteCpu(@PathVariable Long id){
        return curiosityService.deleteCuriosityById(id);
    }

}
