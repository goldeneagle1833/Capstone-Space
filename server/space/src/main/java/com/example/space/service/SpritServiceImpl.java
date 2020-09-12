package com.example.space.service;

import com.example.space.model.Opportunity;
import com.example.space.model.Sprit;
import com.example.space.repository.SpritRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;


@Service
public class SpritServiceImpl implements SpritService{

    @Autowired
    SpritRepository spritRepository;

    @Override
    public Iterable<Sprit> listSprit() {
        return spritRepository.findAll();
    }

    @Override
    public Sprit createSprit(Sprit sprit) {
        return spritRepository.save(sprit);
    }

    @Override
    public Sprit getSpritById(Long id) {
        return spritRepository.findById(id).get();
    }

    @Override
    public HttpStatus deleteSpritById(Long id) {
        spritRepository.deleteById(id);
        return HttpStatus.OK;
    }
}
