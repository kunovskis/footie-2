package com.footie.footieapi.persistence;

import com.footie.footieapi.model.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.transaction.annotation.Transactional;

@Transactional
public interface UserRepository extends
        CrudRepository<User, String>{

    public User findByEmail(String email);

    public User findByUsername(String username);

}
