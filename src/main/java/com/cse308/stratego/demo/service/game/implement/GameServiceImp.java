package com.cse308.stratego.demo.service.game.implement;

import com.cse308.stratego.demo.dto.mapper.GameDTOMapper;
import com.cse308.stratego.demo.dto.model.GameDTO;
import com.cse308.stratego.demo.dto.model.MoveDTO;
import com.cse308.stratego.demo.model.Game;
import com.cse308.stratego.demo.model.Move;
import com.cse308.stratego.demo.repository.GameRepository;
import com.cse308.stratego.demo.repository.MoveRepository;
import com.cse308.stratego.demo.repository.PieceRepository;
import com.cse308.stratego.demo.repository.UserRepository;
import com.cse308.stratego.demo.service.game.interfaces.GameService;
import com.cse308.stratego.demo.service.move.interfaces.MoveService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.Date;
import java.util.ArrayList;
import java.util.List;

@Service
public class GameServiceImp implements GameService {

    @Autowired
    private GameRepository gameRepository;

    @Autowired
    private MoveRepository moveRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PieceRepository pieceRepository;

    @Override
    public int newGame(GameDTO gamedto) {
        Game game = new Game()
                .setPlayer(userRepository.findById(gamedto.getPlayer()).get())
                .setState(gamedto.getState())
                .setCreated(Date.valueOf(gamedto.getCreated()));

        gameRepository.save(game);
        System.out.println("HAME ID IS" + game.getId());
        return game.getId();
    }

    @Override
    public Game findGameById(int id){
        Game game = gameRepository.findById(id).get();
        return game;
    }

    @Override
    public void newGameMoves(GameDTO gamedto, List board) {
        int game_id = gamedto.getId();
        System.out.println("Game id is " + game_id);
        int player_id = gamedto.getPlayer();


        ArrayList<Move> move_list = new ArrayList<>();

        for (int i = 0; i < 40; i++) {
            board.get(i);
            String position = mapPiece(i);
            Move move = new Move()
                    .setGame(gameRepository.findById(gamedto.getId()).get())
                    .setPlayer(userRepository.findById(gamedto.getPlayer()).get())
                    .setCpu(true)
                    .setPiece(pieceRepository.findById(0).get())
                    .setStart_position(position)
                    .setEnd_position(position)
                    .setDescription("TEST DESCRIPTION");
            move_list.add(move);
        }

        for (int i = 59; i < 100; i++) {
            String position = mapPiece(i);
            Move move = new Move()
                    .setGame(gameRepository.findById(gamedto.getId()).get())
                    .setPlayer(userRepository.findById(gamedto.getPlayer()).get())
                    .setCpu(false)
                    .setPiece(pieceRepository.findById(0).get())
                    .setStart_position(position)
                    .setEnd_position(position)
                    .setDescription("TEST DESCRIPTION");
            move_list.add(move);
        }

        moveRepository.saveAll(move_list);
    }

    @Override
    public List<Game> allGames() {
        return gameRepository.findAll();
    }



    String mapPiece(int index) {
        int num = index % 10;
        // Ascii value of 'A'
        int pre = 65;
        int temp = index - num;
        while (temp >= 10) {
            pre++;
            temp -= 10;
        }

        return String.valueOf((char)pre) + num;
    }


    @Override
    public List<Game> getGamesByPlayer(int player_id) {
        System.out.println(player_id);
        List<Game> games = gameRepository.findByplayer(userRepository.findById(player_id).get());

        if (games.isEmpty()) {
            System.out.println("No games");
            return null;
        }
        else {
            System.out.println("Has games");
            return games;
        }
    }
}
