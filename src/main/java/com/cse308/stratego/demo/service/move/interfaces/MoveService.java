package com.cse308.stratego.demo.service.move.interfaces;

import com.cse308.stratego.demo.dto.model.GameDTO;
import com.cse308.stratego.demo.dto.model.MoveDTO;
import org.springframework.stereotype.Service;

import java.util.List;

//@Service
public interface MoveService {
    MoveDTO newMove(MoveDTO movedto);
    List<MoveDTO> newGameMoves(GameDTO gamedto, int[] moves);

}
