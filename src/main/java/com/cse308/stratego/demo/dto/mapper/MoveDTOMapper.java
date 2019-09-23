package com.cse308.stratego.demo.dto.mapper;

import com.cse308.stratego.demo.dto.model.MoveDTO;
import com.cse308.stratego.demo.model.Move;

public class MoveDTOMapper {
    public MoveDTO toMoveDTO(Move move) {
        return new MoveDTO()
                .setPlayer_id(move.getPlayer().getId())
                .setCpu(move.isCpu())
                .setGame_id(move.getGame().getId())
                .setStart_position(move.getStart_position())
                .setEnd_position(move.getEnd_position());
    }
}
