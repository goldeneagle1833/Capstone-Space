package com.example.space.model;

import javax.persistence.*;


@Entity
@Table(name = "Curiosity")
public class Curiosity {
    @Id
    @Column
    private Long id;

    @Column
    private String sol;

    @Column
    private String img_src;

    @Column
    private String earth_date;

    public Curiosity() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getSol() {
        return sol;
    }

    public void setSol(String sol) {
        this.sol = sol;
    }

    public String getImg_src() {
        return img_src;
    }

    public void setImg_src(String img_src) {
        this.img_src = img_src;
    }

    public String getEarth_date() {
        return earth_date;
    }

    public void setEarth_date(String earth_date) {
        this.earth_date = earth_date;
    }
}


