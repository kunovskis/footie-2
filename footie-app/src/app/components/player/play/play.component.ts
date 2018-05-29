// Angular
import { Component } from '@angular/core';

// Models
import { AITeam } from '../../../models/model';

@Component({
    selector: 'app-play',
    templateUrl: './play.component.html',
    styleUrls: ['../../../css/player.css']
})

export class PlayComponent {

    public teams: AITeam[] = [
        {
            name: 'BARCELONA',
            crestUrl: 'https:\/\/fifa17.content.easports.com\/fifa\/fltOnlineAssets\/B1BA185F-AD7C-4128-8A64-746DE4EC5A82\/2018\/fut\/items\/images\/clubbadges\/html5\/dark\/24x24\/l241.png',
            defence: 55,
            midfield: 50,
            attack: 55
        },
        {
            name: 'REAL MADRID',
            crestUrl: 'https:\/\/fifa17.content.easports.com\/fifa\/fltOnlineAssets\/B1BA185F-AD7C-4128-8A64-746DE4EC5A82\/2018\/fut\/items\/images\/clubbadges\/html5\/dark\/24x24\/l243.png',
            defence: 40,
            midfield: 50,
            attack: 60
        }
    ];

    constructor() { }

}
