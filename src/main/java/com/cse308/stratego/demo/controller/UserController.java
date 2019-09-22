package com.cse308.stratego.demo.controller;

import com.cse308.stratego.demo.repository.UserRepository;
import com.cse308.stratego.demo.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(path="/demo")
public class UserController {

    @Autowired
    private UserRepository userRepository;


    @PostMapping(path="/addUser")
    public @ResponseBody String addNewUser (@RequestParam String first_name,
                                            @RequestParam String email,
                                            @RequestParam String password,
                                            @RequestParam String last_name) {
        User n = new User();
        n.setFirst_name(first_name);
        n.setEmail(email);
        n.setHash_pass(password);
        n.setLast_name(last_name);
        userRepository.save(n);
        return "Saved";
    }

    @GetMapping(path="/getUser/{player_id}")
    public @ResponseBody User getUser(@PathVariable int player_id) {
        return userRepository.findById(player_id).get();
    }

    @GetMapping(path="/allUsers")
    public @ResponseBody Iterable<User> getAllUsers() {
        return userRepository.findAll();
    }
}
