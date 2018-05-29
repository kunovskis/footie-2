package com.footie.footieapi.model;

import javax.persistence.*;

@Entity
@Table(name = "users")
public class User {
    @Id()
    @Column(name = "username")
    public String username;

    @Column(name = "email")
    public String email;

    @Column(name = "password")
    public String password;

    @Column(name = "level")
    public int level = 1;

    @Column(name = "experience")
    public int experience = 0;

    @Column(name = "coins")
    public int coins = 1000;

    @Column(name = "dollars")
    public int dollars = 100;

    @Column(name = "energy")
    public int energy = 10;

    @Column(name = "max_energy")
    public int maxEnergy = 10;

    @Column(name = "has_team")
    public boolean hasTeam = false;

    public User(){

    }

    public User(String username, String email, String password){
        this.username = username;
        this.email = email;
        this.password = password;
    }
}
