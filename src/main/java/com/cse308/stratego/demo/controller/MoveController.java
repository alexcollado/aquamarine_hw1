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
public class MoveController {


    @Autowired
    private GameService gameService;

    @Autowired
    private UserService userService;

    @RequestMapping(path="/newMove/{game_id}", method= RequestMethod.POST, headers = "Accept=application/json")
    public @ResponseBody String newMove(@PathVariable int game_id) {

        return "";
    }

    @RequestMapping(path="/gameMoves/{game_id}", method= RequestMethod.POST, headers = "Accept=application/json")
    public @ResponseBody String gameMoves(@PathVariable int game_id) {
        

        return "Saved";
    }

    @RequestMapping(path="/allGames", method= RequestMethod.POST, headers = "Accept=application/json")
    public @ResponseBody Iterable<Game> getAllUsers() {
        return gameService.allGames();
    }
}
