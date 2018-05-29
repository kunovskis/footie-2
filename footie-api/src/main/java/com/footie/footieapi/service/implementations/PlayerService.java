package com.footie.footieapi.service.implementations;

import com.footie.footieapi.model.Player;
import com.footie.footieapi.model.User;
import com.footie.footieapi.persistence.PlayerRepository;
import com.footie.footieapi.persistence.BasePlayerRepository;
import com.footie.footieapi.service.interfaces.PlayerInterface;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PlayerService implements PlayerInterface {

    @Autowired
    private UserService userService;

    @Autowired
    private PlayerRepository playerRepository;

    @Autowired
    private BasePlayerRepository basePlayerRepository;

    public void addPlayer(Player player) throws Exception {
        this.basePlayerRepository.save(player.basePlayer);
        player.user = this.userService.getUser();
        this.playerRepository.save(player);
    }

    public List<Player> getTeam() throws Exception{
        User user = this.userService.getUser();
        return this.playerRepository.getByUser(user);
    }

    public List<Player> getTeamPagination(int page, int size) throws Exception{
        Pageable pageable = new PageRequest(page, size, Sort.Direction.DESC, "currentOverall");
        User user = this.userService.getUser();
        return this.playerRepository.findByUser(user, pageable);
    }
}
