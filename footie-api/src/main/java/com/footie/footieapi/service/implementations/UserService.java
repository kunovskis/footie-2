package com.footie.footieapi.service.implementations;

import com.footie.footieapi.model.User;
import com.footie.footieapi.persistence.UserRepository;
import com.footie.footieapi.service.interfaces.UserInterface;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService implements UserInterface{

    @Autowired
    private UserRepository userRepository;

    private User user = null;

    public void addUser(User newUser) throws Exception {
        if(user != null){
            throw new Exception("Already signed in");
        }
        if(userRepository.findByUsername(newUser.username) != null) {
            throw new Exception("Username taken");
        }
        if(userRepository.findByEmail(newUser.email) != null){
            throw new Exception("Email taken");
        }
        this.user = newUser;
        userRepository.save(newUser);
     }

     public User loginUser(String username, String password) throws Exception {
        if(user != null){
            throw new Exception("Already signed in");
        }
        user = userRepository.findByUsername(username);
        if(user == null){
            throw  new Exception("Username not found");
        }
        if(!user.password.equals(password)){
            user = null;
            throw  new Exception("Wrong password");
        }
        return user;
     }

    public User getUser() throws Exception {
        if(this.user == null){
            throw new Exception("Not signed in");
        }
        return this.user;
    }

    public boolean logoutUser() throws Exception {
        if(this.user == null){
            throw new Exception("Not signed in");
        }
        this.user = null;
        return true;
    }

    public User updateUserWithTeam() throws Exception {
        if(user == null){
            throw new Exception("Not signed in");
        }
        this.user.hasTeam = true;
        this.userRepository.save(user);
        return user;
    }

    public User addCoins(int coins) throws Exception{
        if(user == null){
            throw new Exception("Not signed in");
        }
        this.user.coins += coins;
        this.userRepository.save(user);
        return user;
    }

    public User updateUser(User updatedUser) throws Exception{
        if(user == null){
            throw new Exception("Not signed in");
        }
        this.user = updatedUser;
        this.userRepository.save(user);
        return user;
    }
}
