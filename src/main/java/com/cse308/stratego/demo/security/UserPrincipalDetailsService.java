package com.cse308.stratego.demo.security;

import com.cse308.stratego.demo.model.User;
import com.cse308.stratego.demo.repository.UserRepository;
import com.cse308.stratego.demo.security.UserPrincipal;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class UserPrincipalDetailsService implements UserDetailsService {

    @Autowired
    private UserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String s) throws UsernameNotFoundException {
        User user = userRepository.findByEmail(s);
        UserPrincipal userPrincipal = new UserPrincipal(user);

        return userPrincipal;
    }
}
