package com.cse308.stratego.demo.dto.mapper;

import com.cse308.stratego.demo.dto.model.MoveDTO;
import com.cse308.stratego.demo.model.Move;
import com.cse308.stratego.demo.util.MoveUtil;

public class MoveDTOMapper {
    public MoveDTO toMoveDTO(Move move) {
        return new MoveDTO()
                .setPlayer_id(move.getPlayer().getId())
                .setCpu(move.isCpu())
                .setGame_id(move.getGame().getId())
                .setStart_position(MoveUtil.mapPositionToIndex(move.getStart_position()))
                .setEnd_position(MoveUtil.mapPositionToIndex(move.getEnd_position()));
    }
}
