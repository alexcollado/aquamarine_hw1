package com.cse308.stratego.demo.service.user.implementation;

import com.cse308.stratego.demo.dto.model.UserDTO;
import com.cse308.stratego.demo.dto.mapper.UserDTOMapper;
import com.cse308.stratego.demo.model.User;
import com.cse308.stratego.demo.repository.UserRepository;
import com.cse308.stratego.demo.service.user.interfaces.UserService;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class UserServiceImp implements UserService {
    private UserRepository userRepository;

    @Override
    public UserDTO signup(UserDTO userdto) {
        return null;
    }

    @Override
    public UserDTO findUserByEmail(UserDTO userdto) {
        return null;
    }

    @Override
    public UserDTO getUser(int user_id) {
        User user = userRepository.findById(user_id).get();

        UserDTOMapper mapper = new UserDTOMapper();

        UserDTO res = mapper.toGameDTO(user);
        return res;
    }

    @Override
    public List<UserDTO> getAllUsers() {
        UserDTOMapper mapper = new UserDTOMapper();

        Iterable<User> users = userRepository.findAll();

        List<UserDTO> res = new ArrayList<UserDTO>();

        for (User user : users) {
            res.add(mapper.toGameDTO(user));
        }

        return res;
    }
}
