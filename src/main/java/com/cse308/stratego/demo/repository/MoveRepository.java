package com.cse308.stratego.demo.repository;

import com.cse308.stratego.demo.model.Move;
import org.springframework.data.repository.CrudRepository;

import java.util.Optional;

// This will be AUTO IMPLEMENTED by Spring into a Bean called userRepository
// CRUD refers Create, Read, Update, Delete

public interface MoveRepository extends CrudRepository<Move, Integer> {
    // Optional<T> findbygame(ID var1);
}
