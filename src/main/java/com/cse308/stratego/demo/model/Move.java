package com.cse308.stratego.demo.model;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.sql.Date;

@Getter
@Setter
@Entity // This tells Hibernate to make a table out of this class
public class Move {

    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private Integer id;

    @ManyToOne
    @JoinColumn(name="game_id", referencedColumnName = "id")
    private Game game;

    @ManyToMany
    @JoinColumn(name="player_id", referencedColumnName = "id")
    private User player;

    private boolean isCpu;

    @JoinColumn(name="piece_id", referencedColumnName = "id")
    private Piece piece;

    @Column(name="start_position", nullable=false, length = 3)
    private String start_position;

    @Column(name="end_position", nullable=false, length = 3)
    private String end_position;


}
