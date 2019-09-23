package com.cse308.stratego.demo.repository;

import com.cse308.stratego.demo.model.Move;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;


// This will be AUTO IMPLEMENTED by Spring into a Bean called userRepository
// CRUD refers Create, Read, Update, Delete

@Repository
public interface MoveRepository extends JpaRepository<Move, Integer> {
    List<Move> findByGame_Id(int game_id);
}
