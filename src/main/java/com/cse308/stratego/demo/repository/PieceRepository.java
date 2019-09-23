package com.cse308.stratego.demo.repository;

import com.cse308.stratego.demo.model.Piece;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;

import java.util.Optional;

// This will be AUTO IMPLEMENTED by Spring into a Bean called userRepository
// CRUD refers Create, Read, Update, Delete

public interface PieceRepository extends JpaRepository <Piece, Integer> { }
