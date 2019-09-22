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
import java.util.Optional;

public class GameServiceImp implements GameService {

    private GameRepository gameRepository;

    private MoveRepository moveRepository;

    private UserRepository userRepository;
    @Override
    public GameDTO newGame(GameDTO gamedto) {
        Game game = new Game()
                .setPlayer(userRepository.findById(gamedto.getPlayer()).get())
                .setState(gamedto.getState())
                .setCreated(Date.valueOf(gamedto.getCreated()));

        gameRepository.save(game);
        return null;
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
    public List<GameDTO> getGamesByPlayer(GameDTO gamedto) {
        return null;
    }
}
