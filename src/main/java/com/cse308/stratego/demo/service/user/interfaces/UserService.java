package com.cse308.stratego.demo.service.user.interfaces;

import com.cse308.stratego.demo.dto.model.UserDTO;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface UserService {
    UserDTO signup(UserDTO userdto);
    UserDTO findUserByEmail(UserDTO userdto);
    UserDTO getUser(int user_id);
    List<UserDTO> getAllUsers();
}
