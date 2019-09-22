package com.cse308.stratego.demo.service.move.interfaces;

import com.cse308.stratego.demo.dto.model.GameDTO;
import com.cse308.stratego.demo.dto.model.MoveDTO;

import java.util.List;

public interface MoveService {
    MoveDTO newMove(MoveDTO movedto);
    List<MoveDTO> newGameMoves(GameDTO gamedto);
    List<MoveDTO> findMovesByGame(MoveDTO movedto);

}
