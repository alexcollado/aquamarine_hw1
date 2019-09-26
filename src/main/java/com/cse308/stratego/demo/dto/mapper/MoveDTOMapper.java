package com.cse308.stratego.demo.dto.mapper;

import com.cse308.stratego.demo.dto.model.MoveDTO;
import com.cse308.stratego.demo.model.Move;
import com.cse308.stratego.demo.util.MoveUtil;

public class MoveDTOMapper {
    public MoveDTO toMoveDTO(Move move) {
        return new MoveDTO()
                .setPlayer_id(move.getPlayer().getId())
                .setGame_id(move.getGame().getId())
                .setDescription(move.getDescription());
    }
}
