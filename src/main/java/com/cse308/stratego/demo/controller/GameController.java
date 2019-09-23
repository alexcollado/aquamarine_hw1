package com.cse308.stratego.demo.controller;

import com.cse308.stratego.demo.dto.model.GameDTO;
import com.cse308.stratego.demo.repository.GameRepository;
import com.cse308.stratego.demo.model.Game;
import com.cse308.stratego.demo.repository.MoveRepository;
import com.cse308.stratego.demo.service.game.interfaces.GameService;
import com.cse308.stratego.demo.service.user.interfaces.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.sql.Time;
import java.util.Calendar;
import java.util.Date;
import java.util.List;

@RestController
@RequestMapping(path="/game")
public class GameController {

    @Autowired
    private GameRepository gameRepository;

    @Autowired
    private MoveRepository moveRepository;

    @Autowired
    private GameService gameService;

    @Autowired
    private UserService userService;


    @GetMapping(path="/newGame/{player_id}")
    public @ResponseBody String newGame(@PathVariable int player_id, @RequestBody List<Integer> board) {
        Game n = new Game();

        Calendar calendar = Calendar.getInstance();
        java.util.Date currentDate = calendar.getTime();
        java.sql.Date date = new java.sql.Date(currentDate.getTime());

        GameDTO gamedto = new GameDTO()
                .setPlayer(player_id)
                .setState("New Game")
                .setCreated(date.toString());

        gameService.newGame(gamedto);
        gameService.newGameMoves(gamedto, board);

        return "Saved";
    }

    @GetMapping(path="/allGames")
    public @ResponseBody Iterable<Game> getAllUsers() {
        return gameRepository.findAll();
    }
}
