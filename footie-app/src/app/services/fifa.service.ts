// Angular
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

// 3rd Party
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

// Models
import { Player, FullName, BasePlayer } from '../models/model';

// Services
import { UserAuthService } from './user-auth.service';
import { PlayerService } from './player.service';

@Injectable()
export class FifaService {

    private options = `%22quality%22:%22{quality}%22,%22position%22:%22{roles}%22,%22page%22:%22{page}%22`;
    private fifaUrl = `https://www.easports.com/fifa/ultimate-team/api/fut/item?jsonParamObject=%7B{options}%7D`;

    public goalkeepers: Player[] = [];
    public defenders: Player[] = [];
    public midfielders: Player[] = [];
    public forwards: Player[] = [];

    constructor(private userAuthService: UserAuthService,
        private playerService: PlayerService,
        private http: Http) { }

    public getAllPlayers() {
        this.getPlayer('bronze,rare_bronze', 'GK', 1).subscribe(
            data => {
                const gkLimit = data.totalResults;
                const gkIds = this.getRandomIds(gkLimit, 3);
                this.getPlayers('bronze,rare_bronze', 'GK', 'GK', this.goalkeepers, gkIds, gkLimit);
            }
        );
        this.getPlayer('bronze,rare_bronze', 'CB,RB,LB,RWB,LWB', 1).subscribe(
            data => {
                const defLimit = data.totalResults;
                const defIds = this.getRandomIds(defLimit, 8);
                this.getPlayers('bronze,rare_bronze', 'CB,RB,LB,RWB,LWB', 'DEF', this.defenders, defIds, defLimit);
            }
        );
        this.getPlayer('bronze,rare_bronze', 'CDM,CM,CAM,RM,LM', 1).subscribe(
            data => {
                const defLimit = data.totalResults;
                const defIds = this.getRandomIds(defLimit, 8);
                this.getPlayers('bronze,rare_bronze', 'CDM,CM,CAM,RM,LM', 'MID', this.midfielders, defIds, defLimit);
            }
        );
        this.getPlayer('bronze,rare_bronze', 'CF,ST,RW,LW,LF', 1).subscribe(
            data => {
                const fwdLimit = data.totalResults;
                const fwdIds = this.getRandomIds(fwdLimit, 6);
                this.getPlayers('bronze,rare_bronze', 'CF,ST,RW,LW,LF', 'FWD', this.forwards, fwdIds, fwdLimit);
            }
        );
    }

    public getOnePlayer(quality: string, roles: string, position: string): Observable<Player> {
        return new Observable<Player>(observer => {
            this.getPlayer(quality, roles, 1).subscribe(
                data => {
                    const limit = data.totalResults;
                    const playerId = this.getRandomIds(data.totalResults, 1);
                    this.getPlayer(quality, roles, playerId[0][0]).subscribe(
                        players => {
                            const number = playerId[0][1];
                            let player = players.items[number];
                            player = this.createPlayer(player, position);
                            this.playerService.savePlayer(player);
                            return observer.next(player);
                        }
                    );
                }
            );
        });
    }

    public getPlayer(quality: string, roles: string, page: number) {
        const options = this.options.replace('{quality}', quality).replace('{roles}', roles).replace('{page}', page.toString());
        const url = this.fifaUrl.replace('{options}', options);
        return this.http.get(url).map((response: any) => response.json());
    }

    private getPlayers(quality: string, roles: string, position: string, result: Player[], ids: any[], limit: number) {
        for (let i = 0; i < ids.length; i++) {
            const item = ids[i];
            this.getPlayer(quality, roles, item[0]).subscribe(players => {
                if (players.count === 0) {
                    i--;
                    item[0] = (item[0] - 1) === 0 ? limit : (item[0] - 1);
                } else if (players.count < item[1] + 1) {
                    item[1] = item[1] - 1 === -1 ? 23 : item[1] - 1;
                    if (item[1] === 23) {
                        item[0] = (item[0] - 1) === 0 ? limit : (item[0] - 1);
                    }
                    i--;
                } else {
                    const number = item[1];
                    let player = players.items[number];
                    player = this.createPlayer(player, position);
                    this.playerService.savePlayer(player);
                    result.push(player);
                }
            }, () => { },
                () => {
                    if (result.length === limit - 1) {
                        return result;
                    }
                });
        }
    }

    private createPlayer(player: any, position: string): Player {
        const fullName: FullName = {
            firstName: player.firstName,
            lastName: player.lastName
        };
        const basePlayer: BasePlayer = {
            fullName: fullName,
            quality: player.color,
            overall: player.rating,
            nationality: 'nationality',
            league: 'league',
            club: 'club'
        };
        const newPlayer: Player = {
            id: null,
            basePlayer: basePlayer,
            headshotImgUrl: player.headshotImgUrl,
            multiplier: 1,
            position: position,
            currentOverall: basePlayer.overall,
            role: player.position,
            currentLevel: 1,
            maxLevel: 100,
            tradeable: false,
            teamStatus: 'first_team',
            isInSquadBuilder: false
        };
        return newPlayer;
    }

    private getRoleString(...roles: string[]) {
        let result = ``;
        roles.forEach(role => {
            result = `${result}{role},`;
        });
        result = result.slice(0, -1);
        return result;
    }

    private getRandomIds(maximum: number, needed: number): any[] {
        const result = [];
        while (result.length < needed) {
            const id = Math.floor(Math.random() * maximum) + 1;
            if (!result.includes(id)) {
                result.push(id);
            }
        }
        for (let i = 0; i < result.length; i++) {
            const item = result[i];
            const page = Math.ceil(item / 24);
            const number = item % 24;
            result[i] = [page, number];
        }
        return result;
    }

}
