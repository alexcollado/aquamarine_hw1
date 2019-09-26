package com.cse308.stratego.demo.controller;

import com.cse308.stratego.demo.dto.model.UserDTO;
import com.cse308.stratego.demo.model.Game;
import com.cse308.stratego.demo.repository.UserRepository;
import com.cse308.stratego.demo.model.User;
import com.cse308.stratego.demo.service.user.interfaces.UserService;
import lombok.Builder;
import org.checkerframework.common.util.report.qual.ReportUnqualified;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(path="/api/user")
public class UserController {

    @Autowired
    private UserService userService;

    @RequestMapping(value = "/addUser", method = RequestMethod.POST)
    public @ResponseBody String addNewUser (@RequestBody Person person) {
        System.out.println(person);
        System.out.println(person.first_name);
        System.out.println(person.last_name);
        System.out.println(person.email);
        System.out.println(person.password);

        UserDTO userDTO = UserDTO.builder().first_name(person.first_name).last_name(person.last_name)
                .email(person.email).password(person.password).build();

        System.out.println(1);

        userService.signUp(userDTO);

        System.out.println(2);

        return "Success\n";
    }

    static class Person {
        private String first_name;
        private String last_name;
        private String email;
        private String password;

        public Person(String first_name, String last_name, String email, String password) {
            this.first_name = first_name;
            this.last_name = last_name;
            this.email = email;
            this.password = password;
        }
    }


    @GetMapping(path="/getUser/{player_id}")
    public @ResponseBody UserDTO getUser(@PathVariable int player_id) {
        return userService.findUserById(player_id);
    }

    @GetMapping(path="/allUsers")
    public @ResponseBody Iterable<UserDTO> getAllUsers() {

        return userService.findAll();
    }

    @RequestMapping(path="/login", method = RequestMethod.POST)
    public @ResponseBody ResponseEntity<Object> verifyUserCredentials(@RequestBody Login login){
        System.out.println(1);
        int id = userService.verify(login.email, login.password);

        if (id == -1){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(-1);

        }
        else{
            return ResponseEntity.status(HttpStatus.OK).body(id);
        }
    }

    static class Login {
        private String email;
        private String password;

        public Login(String email, String password) {
            this.email = email;
            this.password = password;
        }
    }
}