package com.cse308.stratego.demo.service.move.implementation;

import com.cse308.stratego.demo.dto.model.GameDTO;
import com.cse308.stratego.demo.dto.model.MoveDTO;
import com.cse308.stratego.demo.model.Move;
import com.cse308.stratego.demo.repository.GameRepository;
import com.cse308.stratego.demo.repository.MoveRepository;
import com.cse308.stratego.demo.repository.PieceRepository;
import com.cse308.stratego.demo.repository.UserRepository;
import com.cse308.stratego.demo.service.move.interfaces.MoveService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MoveServiceImp implements MoveService {

    private GameRepository gameRepository;

    private MoveRepository moveRepository;

    private UserRepository userRepository;

    private PieceRepository pieceRepository;

    @Override
    public MoveDTO newMove(MoveDTO movedto) {
        Move move = new Move().setGame(gameRepository.findById(movedto.getGame_id()).get())
                .setPlayer(userRepository.findById(movedto.getPlayer_id()).get())
                .setCpu(movedto.isCpu())
                .setPiece(pieceRepository.findById(movedto.getPiece_id()).get())
                .setStart_position(movedto.getStart_position())
                .setEnd_position(movedto.getEnd_position())
                .setDescription(movedto.getDescription());

        moveRepository.save(move);
        return null;
    }

    @Override
    public List<MoveDTO> newGameMoves(GameDTO gamedto, int[] moves) {
        return null;
    }



}