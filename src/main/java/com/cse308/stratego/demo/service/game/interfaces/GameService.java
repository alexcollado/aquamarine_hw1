package com.cse308.stratego.demo.service.game.interfaces;

import com.cse308.stratego.demo.dto.model.GameDTO;
import com.cse308.stratego.demo.model.Game;
import com.cse308.stratego.demo.model.Move;
import org.springframework.stereotype.Service;

import java.util.List;

//@Service
public interface GameService {
    int newGame(GameDTO gamedto);
    void newGameMoves(GameDTO gamedto, List board);
    List<Game> allGames();
    List<Game> getGamesByPlayer(int player_id);

}
