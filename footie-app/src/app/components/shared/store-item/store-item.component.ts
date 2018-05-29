// Angular
import { Component, Input } from '@angular/core';

// Models
import { StorePack, User, Player } from '../../../models/model';

// Services
import { NotificationService } from '../../../services/notification.service';
import { UserAuthService } from '../../../services/user-auth.service';
import { ApiService } from '../../../services/api.service';
import { HeaderComponent } from '../header/header.component';
import { FifaService } from '../../../services/fifa.service';
import { Quality } from '../../../models/enums';

@Component({
    selector: 'app-store-item',
    templateUrl: './store-item.component.html',
    styleUrls: ['../../../css/shared.css']
})

export class StoreItemComponent {

    @Input() storeItem: any;

    public showPlayer: Player = null;

    constructor(private notificationService: NotificationService,
        private userAuthService: UserAuthService,
        private apiService: ApiService,
        private fifaService: FifaService) { }

    buyWithCoins() {
        const user = this.userAuthService.getUser();
        if (user.coins < this.storeItem.priceInCoins) {
            this.notificationService.setError('INSUFFICIENT COINS');
        } else {
            user.coins -= this.storeItem.priceInCoins;
            this.updateUser(user);
        }
    }

    buyWithDollars() {
        const user = this.userAuthService.getUser();
        if (user.dollars < this.storeItem.priceInDollars) {
            this.notificationService.setError('INSUFFICIENT DOLLARS');
        } else {
            user.dollars -= this.storeItem.priceInDollars;
            this.updateUser(user);
        }
    }

    updateUser(user: User) {
        this.apiService.updateUser(user).subscribe(
            () => {
                HeaderComponent.setHeader(user);
                this.fifaService.getOnePlayer(this.storeItem.quality,
                    this.storeItem.roles,
                    this.storeItem.position).subscribe(
                        player => {
                            // this.showPlayer = player;
                            this.notificationService.setError('YOU GOT ' +
                                player.basePlayer.fullName.firstName + ' ' + player.basePlayer.fullName.lastName);
                        }
                    );
            },
            error => {
                this.notificationService.setError(error.error.text);
            }
        );
    }

    buyInRealLife() {
        console.log('IRL');
    }

}
