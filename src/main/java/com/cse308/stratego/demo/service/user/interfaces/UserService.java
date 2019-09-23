package com.cse308.stratego.demo.service.user.interfaces;

import com.cse308.stratego.demo.dto.model.UserDTO;

import java.util.List;

public interface UserService {
    UserDTO signup(UserDTO userdto);
    UserDTO findUserByEmail(UserDTO userdto);
    UserDTO getUser(int user_id);
    List<UserDTO> getAllUsers();
}
