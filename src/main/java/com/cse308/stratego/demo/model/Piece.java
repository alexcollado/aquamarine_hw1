package com.cse308.stratego.demo.model;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Getter
@Setter
@Builder
@Entity // This tells Hibernate to make a table out of this class

public class Piece {

    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private Integer id;

    private String type;

}