package com.cse308.stratego.demo.model;

import lombok.*;
import lombok.experimental.Accessors;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Getter
@Setter
@Accessors(chain = true)
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity // This tells Hibernate to make a table out of this class
public class Piece {

    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private Integer id;

    private String type;

}