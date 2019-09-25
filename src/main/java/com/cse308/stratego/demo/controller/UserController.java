package com.cse308.stratego.demo.controller;

import com.cse308.stratego.demo.dto.model.UserDTO;
import com.cse308.stratego.demo.model.Game;
import com.cse308.stratego.demo.repository.UserRepository;
import com.cse308.stratego.demo.model.User;
import com.cse308.stratego.demo.service.user.interfaces.UserService;
import lombok.Builder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(path="/user")
public class UserController {

    @Autowired
    private UserService userService;

    @RequestMapping(value = "/addUser", method = RequestMethod.GET)
    public @ResponseBody String addNewUser (@RequestParam String first_name,
                                            @RequestParam String email,
                                            @RequestParam String password,
                                            @RequestParam String last_name) {

        UserDTO userDTO = UserDTO.builder().first_name(first_name).last_name(last_name)
                .email(email).password(password).build();

        userService.signUp(userDTO);

        return "Success\n";
    }


    @GetMapping(path="/getUser/{player_id}")
    public @ResponseBody UserDTO getUser(@PathVariable int player_id) {
        return userService.findUserById(player_id);
    }

    @GetMapping(path="/allUsers")
    public @ResponseBody Iterable<UserDTO> getAllUsers() {

        return userService.findAll();
    }

    @GetMapping(path="/login")
    public @ResponseBody ResponseEntity<Object> verifyUserCredentials(@RequestParam String email,
                                                                      @RequestParam String password){

        int id = userService.verify(email, password);

        if (id == -1){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null);

        }
        else{
            return ResponseEntity.status(HttpStatus.OK).body(id);
        }
    }
}