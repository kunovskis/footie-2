// Angular
import { Component } from '@angular/core';
import { Router } from '@angular/router';

// Models
import { User } from '../../../models/model';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['../../../css/shared.css']
})

export class HeaderComponent {

    public static dollars = 0;
    public static coins = 0;
    public static username = '';

    constructor(private router: Router) { }

    public static setHeader(user: User) {
        this.dollars = user.dollars;
        this.username = user.username;
        this.coins = user.coins;
    }

    getDollars() {
        return HeaderComponent.dollars;
    }

    getCoins() {
        return HeaderComponent.coins;
    }

    getUsername() {
        return HeaderComponent.username;
    }

    logout() {
        this.router.navigateByUrl('/logout');
    }

}
