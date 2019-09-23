package com.cse308.stratego.demo.service.game.implement;

import com.cse308.stratego.demo.dto.model.GameDTO;
import com.cse308.stratego.demo.model.Game;
import com.cse308.stratego.demo.model.Move;
import com.cse308.stratego.demo.repository.GameRepository;
import com.cse308.stratego.demo.repository.MoveRepository;
import com.cse308.stratego.demo.repository.UserRepository;
import com.cse308.stratego.demo.service.game.interfaces.GameService;

import java.sql.Date;
import java.util.List;

public class GameServiceImp implements GameService {

    private GameRepository gameRepository;

    private MoveRepository moveRepository;

    private UserRepository userRepository;
    @Override
    public void newGame(GameDTO gamedto) {
        Game game = new Game()
                .setPlayer(userRepository.findById(gamedto.getPlayer()).get())
                .setState(gamedto.getState())
                .setCreated(Date.valueOf(gamedto.getCreated()));

        gameRepository.save(game);
    }

    @Override
    public void newGameMoves(GameDTO gamedto, int[] board) {
        int game_id = gamedto.getId();



    }

    @Override
    public List<Move> getMovesByGame(GameDTO gameDTO) {
        List<Move> moves = moveRepository.findByGameID(gameDTO.getId());
        if (moves.isEmpty()) {
            return null;
        }
        else {
            return moves;
        }
    }

    @Override
    public List<Game> getGamesByPlayer(GameDTO gamedto) {
        int player_id = gamedto.getPlayer();

        List<Game> games = gameRepository.findByPlayerID(player_id);

        if (games.isEmpty()) {
            return null;
        }
        else {
            return games;
        }
    }
}
