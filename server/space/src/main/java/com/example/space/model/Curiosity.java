package com.example.space.model;

import javax.persistence.*;


@Entity
@Table(name = "Curiosity")
public class Curiosity {
    @Id
    @Column
    private Long id;

    @Column
    private String location;

    @Column
    private String date;

    public Curiosity() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }
}
