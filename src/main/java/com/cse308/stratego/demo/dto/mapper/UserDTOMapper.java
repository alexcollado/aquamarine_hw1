package com.cse308.stratego.demo.dto.mapper;

import com.cse308.stratego.demo.dto.model.UserDTO;
import com.cse308.stratego.demo.model.User;

public class UserDTOMapper {
    public UserDTO toGameDTO(User user) {
        return new UserDTO()
                .setId(user.getId())
                .setFirst_name(user.getFirst_name())
                .setLast_name(user.getLast_name())
                .setEmail(user.getEmail())
                .setPassword(user.getHash_pass());
    }
}
