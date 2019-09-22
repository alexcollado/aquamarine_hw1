package com.cse308.stratego.demo.model;

import lombok.Getter;
import lombok.Setter;
import lombok.experimental.Accessors;

import javax.persistence.*;
import java.sql.Date;

@Getter
@Setter
@Accessors(chain = true)
@Entity // This tells Hibernate to make a table out of this class
public class Game {

    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private Integer id;

    @OneToOne
    @JoinColumn(name="player_id", referencedColumnName = "id")
    private User player;

    @Column(name="game_state", length = 1)
    private String state;

    private Date created;
}
