// Angular
import { Injectable } from '@angular/core';

// 3rd Party
import { Observable } from 'rxjs/Observable';

// Models
import { AITeam } from '../models/model';

// Services
import { ApiService } from './api.service';

@Injectable()
export class PlayService {

    constructor(private apiService: ApiService) { }

    public playGame(aiTeam: AITeam): Observable<boolean> {
        return new Observable<boolean>(observer => {
            this.apiService.getTeam().subscribe(
                players => {
                    const def = players.filter(p => p.position === 'GK' || p.position === 'DEF');
                    const mid = players.filter(p => p.position === 'MID');
                    const fwd = players.filter(p => p.position === 'FWD');
                    const aiTeamDefence = aiTeam.defence + (aiTeam.midfield / 2);
                    const aiTeamOffence = aiTeam.attack + (aiTeam.midfield / 2);
                    let teamDef = 0;
                    def.forEach(x => {
                        teamDef += x.basePlayer.overall;
                    });
                    teamDef /= def.length;
                    let teamMid = 0;
                    mid.forEach(x => {
                        teamMid += x.basePlayer.overall;
                    });
                    teamMid /= mid.length;
                    let teamFwd = 0;
                    fwd.forEach(x => {
                        teamFwd += x.basePlayer.overall;
                    });
                    teamFwd /= fwd.length;
                    const teamDefence = teamDef += (teamMid / 2);
                    const teamOffence = teamFwd += (teamMid / 2);
                    const maximum = teamDefence + teamOffence + aiTeamDefence + aiTeamOffence;
                    const id = Math.floor(Math.random() * maximum) + 1;
                    if (id < teamDefence) {
                        observer.next(true);
                    } else if (id < teamDefence + aiTeamDefence) {
                        observer.next(false);
                    } else if (id < teamDefence + aiTeamDefence + teamOffence) {
                        observer.next(true);
                    } else {
                        observer.next(false);
                    }

                }
            );
        });
    }

}