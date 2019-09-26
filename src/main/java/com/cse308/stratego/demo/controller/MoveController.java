package com.cse308.stratego.demo.controller;

import com.cse308.stratego.demo.dto.model.GameDTO;
import com.cse308.stratego.demo.dto.model.MoveDTO;
import com.cse308.stratego.demo.model.Move;
import com.cse308.stratego.demo.repository.GameRepository;
import com.cse308.stratego.demo.model.Game;
import com.cse308.stratego.demo.repository.MoveRepository;
import com.cse308.stratego.demo.service.game.interfaces.GameService;
import com.cse308.stratego.demo.service.move.interfaces.MoveService;
import com.cse308.stratego.demo.service.user.interfaces.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.sql.Time;
import java.util.Calendar;
import java.util.Date;
import java.util.List;

@RestController
@RequestMapping(path="/api/move")
public class MoveController {


    @Autowired
    private GameService gameService;

    @Autowired
    private UserService userService;

    @Autowired
    private MoveService moveService;

    @RequestMapping(path="/newMove/{player_id}/{game_id}", method= RequestMethod.POST, headers = "Accept=application/json")
    public @ResponseBody String newMove(@PathVariable int player_id,
                                        @PathVariable int game_id,
                                        @RequestParam String description
                                        ) {
        MoveDTO movedto = new MoveDTO()
                .setDescription(description)
                .setGame_id(game_id)
                .setPlayer_id(player_id);
        moveService.newMove(movedto);
        return "";
    }

    @RequestMapping(path="/gameMoves/{game_id}", method= RequestMethod.GET, headers = "Accept=application/json")
    public @ResponseBody Iterable<Move> gameMoves(@PathVariable int game_id) {
        return moveService.getMovesByGame(game_id);
    }

}
