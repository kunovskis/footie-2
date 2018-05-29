// Angular
import { Component, OnInit } from '@angular/core';

// Services
import { FifaService } from '../../../services/fifa.service';
import { ApiService } from '../../../services/api.service';

// Models
import { Player } from '../../../models/model';


@Component({
    selector: 'app-generate-team',
    templateUrl: './generate-team.component.html',
    styleUrls: ['../../../css/player.css']
})

export class GenerateTeamComponent implements OnInit {

    private saved = 0;

    public loading = true;

    constructor(private fifaService: FifaService,
        private apiService: ApiService) { }

    ngOnInit() {
        this.fifaService.getAllPlayers();
    }

    public GKs() {
        return this.fifaService.goalkeepers;
    }

    public DEFs() {
        return this.fifaService.defenders;
    }

    public MIDs() {
        return this.fifaService.midfielders;
    }

    public FWDs() {
        return this.fifaService.forwards;
    }

    public isListFilled() {
        if (this.GKs().length === 3 &&
            this.DEFs().length === 8 &&
            this.MIDs().length === 8 &&
            this.FWDs().length === 6) {
            if (this.saved === 0) {
                this.apiService.updateUserWithTeam().subscribe();
                this.saved = 1;
            }
            this.loading = false;
            return true;
        } else {
            return false;
        }
    }

}
