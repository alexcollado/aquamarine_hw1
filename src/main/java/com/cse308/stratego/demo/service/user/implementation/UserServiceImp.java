package com.cse308.stratego.demo.service.user.implementation;

import com.cse308.stratego.demo.dto.mapper.UserDTOMapper;
import com.cse308.stratego.demo.dto.model.GameDTO;
import com.cse308.stratego.demo.dto.model.UserDTO;
import com.cse308.stratego.demo.model.User;
import com.cse308.stratego.demo.repository.UserRepository;
import com.cse308.stratego.demo.service.user.interfaces.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class UserServiceImp implements UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    UserDTOMapper userDtOMapper = new UserDTOMapper();

    @Override
    public void signUp(UserDTO userdto) {

        User user = User.builder().email(userdto.getEmail()).first_name(userdto.getFirst_name())
                .last_name(userdto.getLast_name())
                .hash_pass(passwordEncoder.encode(userdto.getPassword())).build();

        userRepository.save(user);

    }

    @Override
    public UserDTO findUserByEmail(String email) {
        User user = userRepository.findByEmail(email);
        UserDTO userDTO = userDtOMapper.toGameDTO(user);

        return userDTO;
    }

    @Override
    public UserDTO findUserById(int id){

        User user = userRepository.findById(id).get();
        UserDTO userDTO = userDtOMapper.toGameDTO(user);

        return userDTO;
    }

    @Override
    public List<UserDTO> findAll(){
        List<User> arrayList = userRepository.findAll();
        List<UserDTO> dtoList = new ArrayList<>();

        for (User u: arrayList){
            UserDTO userDTO = userDtOMapper.toGameDTO(u);
            dtoList.add(userDTO);
        }

        return dtoList;

    }

}
