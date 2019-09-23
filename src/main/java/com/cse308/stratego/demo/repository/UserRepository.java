package com.cse308.stratego.demo.repository;

import com.cse308.stratego.demo.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

// This will be AUTO IMPLEMENTED by Spring into a Bean called userRepository
// CRUD refers Create, Read, Update, Delete

@Repository
public interface UserRepository extends JpaRepository<User, Integer> {

    User findByEmail(String email);
}
