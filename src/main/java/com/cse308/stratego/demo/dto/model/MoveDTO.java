package com.cse308.stratego.demo.dto.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;
import lombok.experimental.Accessors;

@Getter
@Setter
@Accessors(chain = true)
@NoArgsConstructor
@ToString
@JsonInclude(value = JsonInclude.Include.NON_NULL)
@JsonIgnoreProperties(ignoreUnknown = true)
public class MoveDTO {
    private int id;

    private int game_id;

    private int player_id;

    private boolean isCpu;

    private int piece_id;

    private String start_position;

    private String end_position;

    private String description;
}
