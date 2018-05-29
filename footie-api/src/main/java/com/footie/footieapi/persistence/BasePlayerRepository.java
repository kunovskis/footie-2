package com.footie.footieapi.persistence;

import com.footie.footieapi.model.BasePlayer;
import com.footie.footieapi.model.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.transaction.annotation.Transactional;

@Transactional
public interface BasePlayerRepository extends
        CrudRepository<BasePlayer, String>{

}
