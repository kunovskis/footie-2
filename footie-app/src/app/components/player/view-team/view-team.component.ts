// Angular
import { Component, OnInit } from '@angular/core';

// Services
import { ApiService } from '../../../services/api.service';

// Models
import { Player } from '../../../models/model';

@Component({
    selector: 'app-view-team',
    templateUrl: './view-team.component.html',
    styleUrls: ['../../../css/player.css']
})

export class ViewTeamComponent implements OnInit {

    public players: Player[] = [];

    constructor(private apiService: ApiService) { }

    ngOnInit() {
        this.apiService.getTeamPagination(0, 10).subscribe(
            data => {
                this.players = data;
            }
        );
    }

}
