package com.cse308.stratego.demo.controller;

import com.cse308.stratego.demo.repository.GameRepository;
import com.cse308.stratego.demo.model.Game;
import com.cse308.stratego.demo.repository.MoveRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(path="/game")
public class GameController {

    @Autowired
    private GameRepository gameRepository;

    @Autowired
    private MoveRepository moveRepository;

    @GetMapping(path="/newGame/{player_id}")
    public @ResponseBody String newGame(@PathVariable int player_id, @RequestParam int[] board) {
        Game n = new Game();
        System.out.println();
        gameRepository.save(n);
        return "Saved";
    }

    @GetMapping(path="/allGames")
    public @ResponseBody Iterable<Game> getAllUsers() {
        return gameRepository.findAll();
    }
}
