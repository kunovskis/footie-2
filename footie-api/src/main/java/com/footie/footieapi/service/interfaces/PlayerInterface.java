package com.footie.footieapi.service.interfaces;

import com.footie.footieapi.model.Player;

import java.util.List;

public interface PlayerInterface {

    void addPlayer(Player player) throws Exception;

    List<Player> getTeam() throws Exception;

    List<Player> getTeamPagination(int from, int to) throws Exception;
}
