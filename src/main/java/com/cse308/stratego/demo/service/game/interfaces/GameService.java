package com.cse308.stratego.demo.service.game.interfaces;

import com.cse308.stratego.demo.dto.model.GameDTO;
import com.cse308.stratego.demo.model.Move;

import java.util.List;

public interface GameService {
    GameDTO newGame(GameDTO gamedto);
    List<Move> getMovesByGame(GameDTO gameDTO);
    List<GameDTO> getGamesByPlayer(GameDTO gamedto);

}
