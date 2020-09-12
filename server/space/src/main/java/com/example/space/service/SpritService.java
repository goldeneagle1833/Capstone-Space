package com.example.space.service;

import com.example.space.model.Sprit;
import org.springframework.http.HttpStatus;

public interface SpritService {
    Iterable<Sprit> listSprit();
    Sprit createSprit(Sprit sprit);
    Sprit getSpritById(Long id);
    HttpStatus deleteSpritById(Long id);
}
