package com.cse308.stratego.demo.controller;

import com.cse308.stratego.demo.dto.model.UserDTO;
import com.cse308.stratego.demo.repository.UserRepository;
import com.cse308.stratego.demo.model.User;
import com.cse308.stratego.demo.service.user.interfaces.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path="/demo")
public class UserController {

    private UserService userService;

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
//        userRepository.save(n);
        return "Saved";
    }

    @GetMapping(path="/getUser/{player_id}")
    public @ResponseBody UserDTO getUser(@PathVariable int player_id) {
//        return userRepository.findById(player_id).get();
        return userService.getUser(player_id);
    }

    @GetMapping(path="/allUsers")
    public @ResponseBody List<UserDTO> getAllUsers() {
//        return userRepository.findAll();
        return userService.getAllUsers();
    }
}
