package com.footie.footieapi.web;


import com.footie.footieapi.model.User;
import com.footie.footieapi.persistence.UserRepository;
import com.footie.footieapi.service.implementations.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping(value="/user/register", consumes = MediaType.ALL_VALUE, produces = "application/json")
    public <T> T addUser(@RequestBody User user) {
        try {
            this.userService.addUser(user);
        } catch (Exception ex){
            return (T) ex.getMessage();
        }
        return (T) user;
    }

    @PostMapping(value="/user/login", consumes = MediaType.ALL_VALUE, produces = "application/json")
    public <T> T loginUser(@RequestBody String[] response){
        User user;
        try{
            user = this.userService.loginUser(response[0], response[1]);
        } catch (Exception ex){
            return (T) ex.getMessage();
        }
        return (T) user;
    }

    @RequestMapping(method = RequestMethod.GET, value="/user", produces = "application/json")
    public <T> T getUser(){
        User user;
        try{
            user = this.userService.getUser();
        } catch (Exception ex) {
            return (T) ex.getMessage();
        }
        return (T) user;
    }

    @RequestMapping(method = RequestMethod.GET, value="/user/logout", produces = "application/json")
    public <T> T logoutUser(){
        Boolean success;
        try{
            success =  this.userService.logoutUser();
        } catch (Exception ex) {
            return (T) ex.getMessage();
        }
        return (T) success;
    }

    @PostMapping(value="/user/has-team", consumes = MediaType.ALL_VALUE, produces = "application/json")
    public <T> T updateUserWithTeam(@RequestBody String response){
        User user;
        try{
            user = this.userService.updateUserWithTeam();
        } catch (Exception ex) {
            return (T) ex.getMessage();
        }
        return (T) user;
    }

    @PostMapping(value="/user/add-coins", consumes = MediaType.ALL_VALUE, produces = "application/json")
    public <T> T addCoins(@RequestBody int coins){
        User user;
        try{
            user = this.userService.addCoins(coins);
        } catch (Exception ex) {
            return (T) ex.getMessage();
        }
        return (T) user;
    }

    @PostMapping(value="/user/update-user", consumes = MediaType.ALL_VALUE, produces = "application/json")
    public <T> T addCoins(@RequestBody User updatedUser){
        User user;
        try{
            user = this.userService.updateUser(updatedUser);
        } catch (Exception ex) {
            return (T) ex.getMessage();
        }
        return (T) user;
    }
}
