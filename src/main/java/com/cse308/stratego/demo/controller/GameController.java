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
@RequestMapping(path="/api/game")
public class GameController {


    @Autowired
    private GameService gameService;

    @Autowired
    private UserService userService;


    @RequestMapping(path="/newGame/{player_id}", method= RequestMethod.POST, headers = "Accept=application/json")
    public @ResponseBody String newGame(@PathVariable int player_id, @RequestBody List<Integer> board) {
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
        //gameService.newGameMoves(gamedto, board);

        return "Saved";
    }

    @RequestMapping(path="/playerGames/{player_id}", method= RequestMethod.GET, headers = "Accept=application/json")
    public @ResponseBody Iterable<Game> playerGames(@PathVariable int player_id) {
        return gameService.getGamesByPlayer(player_id);
    }

    @RequestMapping(path="/allGames", method= RequestMethod.GET, headers = "Accept=application/json")
    public @ResponseBody Iterable<Game> getAllGames() {
        return gameService.allGames();
    }
}
