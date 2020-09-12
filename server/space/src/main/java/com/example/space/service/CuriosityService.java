package com.example.space.service;

import com.example.space.model.Curiosity;
import org.springframework.http.HttpStatus;

public interface CuriosityService {
    Iterable<Curiosity> listCuriosity();
    Curiosity createCuriosity(Curiosity curiosity);
    Curiosity getCuriosityById(Long id);
    HttpStatus deleteCuriosityById(Long id);
}
