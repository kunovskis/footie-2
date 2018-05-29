// Angular
import { Component, Input } from '@angular/core';

// Models
import { AITeam } from '../../../models/model';

// Services
import { PlayService } from '../../../services/play.service';
import { ApiService } from '../../../services/api.service';
import { UserAuthService } from '../../../services/user-auth.service';
import { NotificationService } from '../../../services/notification.service';

// Components
import { HeaderComponent } from '../header/header.component';

@Component({
    selector: 'app-ai-team-box',
    templateUrl: './ai-team-box.component.html',
    styleUrls: ['../../../css/shared.css']
})

export class AiTeamBoxComponent {

    @Input() team: AITeam;

    constructor(private playService: PlayService,
        private apiService: ApiService,
        private userAuthService: UserAuthService,
        private notificationService: NotificationService) { }

    play() {
        this.playService.playGame(this.team).subscribe(
            result => {
                let ammountWon = 100;
                let notification = 'LOSS';
                if (result) {
                    ammountWon = 500;
                    notification = 'WIN';
                }
                this.notificationService.setError(notification);
                this.apiService.addCoins(ammountWon).subscribe(
                    user => {
                        this.userAuthService.updateUser(user);
                        HeaderComponent.setHeader(user);
                    }
                );
            }
        );
    }

}
