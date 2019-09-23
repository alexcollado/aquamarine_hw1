package com.cse308.stratego.demo.service.game.implement;

import com.cse308.stratego.demo.dto.model.GameDTO;
import com.cse308.stratego.demo.dto.model.MoveDTO;
import com.cse308.stratego.demo.model.Game;
import com.cse308.stratego.demo.model.Move;
import com.cse308.stratego.demo.repository.GameRepository;
import com.cse308.stratego.demo.repository.MoveRepository;
import com.cse308.stratego.demo.repository.UserRepository;
import com.cse308.stratego.demo.service.game.interfaces.GameService;
import com.cse308.stratego.demo.service.move.interfaces.MoveService;
import org.springframework.beans.factory.annotation.Autowired;

import java.sql.Date;
import java.util.List;

public class GameServiceImp implements GameService {

    private GameRepository gameRepository;

    private MoveRepository moveRepository;

    private UserRepository userRepository;

    @Autowired
    private MoveService moveService;

    @Override
    public void newGame(GameDTO gamedto) {
        Game game = new Game()
                .setPlayer(userRepository.findById(gamedto.getPlayer()).get())
                .setState(gamedto.getState())
                .setCreated(Date.valueOf(gamedto.getCreated()));

        gameRepository.save(game);
    }

    @Override
    public void newGameMoves(GameDTO gamedto, List board) {
        int game_id = gamedto.getId();
        int player_id = gamedto.getPlayer();

        for (int i = 0; i < 40; i++) {
            board.get(i);
            String position = mapPiece(i);
            MoveDTO movedto = new MoveDTO()
                    .setGame_id(game_id)
                    .setPlayer_id(player_id)
                    .setCpu(true)
                    .setStart_position(position)
                    .setEnd_position(position)
                    .setPiece_id(0);
            moveService.newMove(movedto);
        }

        for (int i = 59; i < 100; i++) {
            String position = mapPiece(i);
            MoveDTO movedto = new MoveDTO()
                    .setGame_id(game_id)
                    .setPlayer_id(player_id)
                    .setCpu(true)
                    .setStart_position(position)
                    .setEnd_position(position)
                    .setPiece_id(0);
            moveService.newMove(movedto);
        }

    }


    public String mapPiece(int index) {
        int num = index % 10;
        // Ascii value of 'A'
        int pre = 65;
        int temp = index - num;
        while (temp >= 10) {
            pre++;
            temp -= 10;
        }

        return String.valueOf(pre) + num;
    }

    @Override
    public List<Move> getMovesByGame(GameDTO gameDTO) {
        List<Move> moves = moveRepository.findByGame_Id(gameDTO.getId());
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

        List<Game> games = gameRepository.findByplayer(player_id);

        if (games.isEmpty()) {
            return null;
        }
        else {
            return games;
        }
    }
}
