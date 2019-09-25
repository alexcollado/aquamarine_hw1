package com.cse308.stratego.demo.controller;


import com.cse308.stratego.demo.model.User;
import com.cse308.stratego.demo.service.user.interfaces.UserService;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.Mock;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.ArrayList;
import java.util.List;

@RunWith(SpringRunner.class)
@WebMvcTest(UserController.class)
public class UserControllerTest {

    @Mock
    private UserService userService;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Test
    public void testAddNewUser(){

    }

    @Before
    public void setUp(){
        List<User> newList = new ArrayList<>();

        User user = User.builder().first_name("Barack").last_name("Obama")
                .email("obama@user.org").hash_pass(passwordEncoder.encode(("murica"))).build();

        newList.add(user);

    }





}
