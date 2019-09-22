package com.cse308.stratego.demo.service.user.interfaces;

import com.cse308.stratego.demo.dto.model.UserDTO;

public interface UserService {
    UserDTO signup(UserDTO userdto);
    UserDTO findUserByEmail(UserDTO userdto);

}
