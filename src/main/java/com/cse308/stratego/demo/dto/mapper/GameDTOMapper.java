package com.cse308.stratego.demo.dto.mapper;

import com.cse308.stratego.demo.dto.model.GameDTO;
import com.cse308.stratego.demo.model.Game;

public class GameDTOMapper {
    public GameDTO toGameDTO(Game game) {
        return new GameDTO()
                .setId(game.getId())
                .setPlayer(game.getPlayer().getId())
                .setState(game.getState())
                .setCreated(game.getCreated().toString());
    }
}
