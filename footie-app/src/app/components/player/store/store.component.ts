// Angular
import { Component } from '@angular/core';
import { StorePack } from '../../../models/model';

@Component({
    selector: 'app-store',
    templateUrl: './store.component.html',
    styleUrls: ['../../../css/player.css']
})

export class StoreComponent {

    public items: StorePack[] = [
        {
            description: 'STRIKERS GOLD PLAYER',
            quality: 'gold',
            numberOfPlayers: 1,
            roles: 'ST',
            position: 'FWD',
            priceInCoins: 1000,
            priceInDollars: 50
        },
        {
            description: 'BUY COINS AND DOLLARS',
            priceInRealLife: 5.55,
            coins: 5000,
            dollars: 1000
        }
    ];

    constructor() { }

}
