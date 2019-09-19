package com.cse308.stratego.demo.model;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.sql.Date;

@Getter
@Setter
@Entity // This tells Hibernate to make a table out of this class
public class Game {

    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private Integer id;

    private User player;

    @Column(name="game_state", length = 1)
    private String state;

    private Date created;
}
