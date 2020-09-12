package com.example.space.service;

import com.example.space.model.Curiosity;

import com.example.space.repository.CuriosityRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

@Service
public class CuriositySerivceImpl implements CuriosityService {

    @Autowired
    CuriosityRepository curiosityRepository;

    @Override
    public Iterable<Curiosity> listCuriosity() {
        return curiosityRepository.findAll();
    }

    @Override
    public Curiosity createCuriosity(Curiosity curiosity) {
        return curiosityRepository.save(curiosity);
    }

    @Override
    public Curiosity getCuriosityById(Long id) {
        return curiosityRepository.findById(id).get();
    }

    @Override
    public HttpStatus deleteCuriosityById(Long id) {
        curiosityRepository.deleteById(id);
        return HttpStatus.OK;
    }
}
