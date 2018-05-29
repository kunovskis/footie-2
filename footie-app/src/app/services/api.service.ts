// Angular
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// 3rd Party
import { Observable } from 'rxjs/Observable';

// Models
import { User, Player, StorePack } from '../models/model';

@Injectable()
export class ApiService {

    private apiUrl = 'http://localhost:8080';

    constructor(private http: HttpClient) { }

    public loginUser(username: string, password: string): Observable<User> {
        const url = `${this.apiUrl}/user/login`;
        return this.http.post<User>(url, [username, password]);
    }

    public registerUser(username: string, email: string, password: string): Observable<User> {
        const url = `${this.apiUrl}/user/register`;
        const user: User = {
            username: username,
            email: email,
            password: password,
            level: 1,
            experience: 0,
            coins: 1000,
            dollars: 100,
            energy: 10,
            maxEnergy: 10,
            hasTeam: false
        };
        return this.http.post<User>(url, user);
    }

    public getUser(): Observable<User> {
        const url = `${this.apiUrl}/user`;
        return this.http.get<User>(url);
    }

    public updateUserWithTeam() {
        const url = `${this.apiUrl}/user/has-team`;
        return this.http.post<User>(url, 'string');
    }

    public logoutUser(): Observable<boolean> {
        const url = `${this.apiUrl}/user/logout`;
        return this.http.get<boolean>(url);
    }

    public savePlayer(player: Player): Observable<Player> {
        const url = `${this.apiUrl}/player/save`;
        return this.http.post<Player>(url, player);
    }

    public getTeam(): Observable<Player[]> {
        const url = `${this.apiUrl}/player/team`;
        return this.http.get<Player[]>(url);
    }

    public getTeamPagination(from: number, to: number): Observable<Player[]> {
        const url = `${this.apiUrl}/player/team-pagination`;
        return this.http.post<Player[]>(url, [from, to]);
    }

    public addCoins(coins: number): Observable<User> {
        const url = `${this.apiUrl}/user/add-coins`;
        return this.http.post<User>(url, coins);
    }

    public updateUser(user: User): Observable<User> {
        const url = `${this.apiUrl}/user/update-user`;
        return this.http.post<User>(url, user);
    }

}
