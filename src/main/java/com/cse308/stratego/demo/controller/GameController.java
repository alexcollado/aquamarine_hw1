package com.cse308.stratego.demo.controller;

import com.cse308.stratego.demo.dto.model.GameDTO;
import com.cse308.stratego.demo.repository.GameRepository;
import com.cse308.stratego.demo.model.Game;
import com.cse308.stratego.demo.repository.MoveRepository;
import com.cse308.stratego.demo.service.game.interfaces.GameService;
import com.cse308.stratego.demo.service.user.interfaces.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.sql.Time;
import java.util.Calendar;
import java.util.Date;
import java.util.List;

@RestController
@RequestMapping(path="/api/game")
public class GameController {


    @Autowired
    private GameService gameService;

    @Autowired
    private UserService userService;


    @RequestMapping(path="/newGame/{player_id}", method= RequestMethod.POST)
    public @ResponseBody GameDTO newGame(@PathVariable int player_id) {
        Game n = new Game();

        Calendar calendar = Calendar.getInstance();
        java.util.Date currentDate = calendar.getTime();
        java.sql.Date date = new java.sql.Date(currentDate.getTime());

        GameDTO gamedto = new GameDTO()
                .setPlayer(player_id)
                .setState("N")
                .setCreated(date.toString());

        System.out.println(player_id);
        int game_id = gameService.newGame(gamedto);
        gamedto.setId(game_id);
        return gamedto;
    }

    @RequestMapping(path="/setEndResult/{game_id}", method= RequestMethod.POST, headers = "Accept=application/json")
    public @ResponseBody Game newMove(@PathVariable int game_id,
                                        @RequestBody String result
                                        ) {
        return null;
    }

    @RequestMapping(path="/playerGames/{player_id}", method= RequestMethod.GET, headers = "Accept=application/json")
    public @ResponseBody ResponseEntity<List<Game>> playerGames(@PathVariable int player_id) {
        List<Game> games = gameService.getGamesByPlayer(player_id);
        if(games == null) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null);
        }
        return ResponseEntity.status(HttpStatus.OK).body(games);
    }

    @RequestMapping(path="/allGames", method= RequestMethod.GET, headers = "Accept=application/json")
    public @ResponseBody Iterable<Game> getAllGames() {
        return gameService.allGames();
    }
}
