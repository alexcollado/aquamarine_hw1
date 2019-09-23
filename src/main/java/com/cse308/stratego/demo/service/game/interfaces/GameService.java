package com.cse308.stratego.demo.service.game.interfaces;

import com.cse308.stratego.demo.dto.model.GameDTO;
import com.cse308.stratego.demo.model.Game;
import com.cse308.stratego.demo.model.Move;

import java.util.List;

public interface GameService {
    void newGame(GameDTO gamedto);
    void newGameMoves(GameDTO gamedto, int[] board);
    List<Move> getMovesByGame(GameDTO gameDTO);
    List<Game> getGamesByPlayer(GameDTO gamedto);

}