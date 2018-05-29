package com.footie.footieapi.model;

import javax.persistence.*;

@Entity
@Table(name="base_players")
public class BasePlayer {

    @EmbeddedId
    public FullName fullName;

    public String quality;

    public int overall;

    public String nationality;

    public String league;

    public String club;

    public BasePlayer() {}

}
