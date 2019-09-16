package com.cse308.stratego.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;

@SpringBootApplication(exclude = { SecurityAutoConfiguration.class })
public class Cse308AquamarineApplication {

    // Delete comment later
    // Second bogus comment

    public static void main(String[] args) {
        SpringApplication.run(Cse308AquamarineApplication.class, args);
    }



}
