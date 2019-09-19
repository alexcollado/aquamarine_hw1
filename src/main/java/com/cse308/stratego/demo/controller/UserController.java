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


    @GetMapping(path="/add")
    public @ResponseBody String addNewUser (@RequestParam String name) {
        User n = new User();
        n.setFirst_name(name);
        userRepository.save(n);
        return "Saved";
    }

    @GetMapping(path="/all")
    public @ResponseBody Iterable<User> getAllUsers() {
        return userRepository.findAll();
    }
}
