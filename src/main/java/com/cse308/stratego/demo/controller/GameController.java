package com.cse308.stratego.demo.controller;

import com.cse308.stratego.demo.repository.GameRepository;
import com.cse308.stratego.demo.model.Game;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(path="/demo")
public class GameController {

    @Autowired
    private GameRepository gameRepository;

    @GetMapping(path="/add [name]")
    public @ResponseBody String addNewUser (@RequestParam String name) {
        Game n = new Game();
        gameRepository.save(n);
        return "Saved";
    }

    @GetMapping(path="/all")
    public @ResponseBody Iterable<Game> getAllUsers() {
        return gameRepository.findAll();
    }
}
