package com.example.space.controller;

import com.example.space.model.Sprit;
import com.example.space.service.SpritService;
import com.example.space.service.SpritServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/sprit")
public class SpritController {
    @Autowired
    SpritService spritService;

    @GetMapping
    public Iterable<Sprit> listAllSprirt(){
        return spritService.listSprit();
    }

    @PostMapping
    public Sprit createSprit(@RequestBody Sprit sprit){
        return spritService.createSprit(sprit);
    }

    @GetMapping("/{id}")
    public Sprit getSpritById(@PathVariable Long id){
        return spritService.getSpritById(id);
    }

    @DeleteMapping("/{id}")
    public HttpStatus deleteSpirtById(@PathVariable Long id){
        return spritService.deleteSpritById(id);
    }



}
