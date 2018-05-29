package com.footie.footieapi.model;

import javax.persistence.Column;
import javax.persistence.Embeddable;
import java.io.Serializable;

@Embeddable
public class FullName implements Serializable{

    @Column(name="first_name")
    public String firstName;

    @Column(name="last_name")
    public String lastName;

    public FullName() {}
}
