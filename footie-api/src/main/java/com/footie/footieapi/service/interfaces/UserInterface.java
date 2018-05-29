package com.footie.footieapi.service.interfaces;

import com.footie.footieapi.model.User;

public interface UserInterface {

    void addUser(User newUser) throws Exception;

    User loginUser(String username, String password) throws Exception;

    User getUser() throws Exception;

    boolean logoutUser() throws Exception;

    User updateUserWithTeam() throws Exception;

    User addCoins(int coins) throws Exception;

    User updateUser(User updatedUser) throws Exception;
}
