// Angular
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// Models
import { Player } from '../models/model';

// Services
import { ApiService } from './api.service';
import { NotificationService } from './notification.service';

@Injectable()
export class PlayerService {

    private apiUrl = 'http://localhost:8080';

    constructor(private apiService: ApiService,
        private notificationService: NotificationService) { }

    public savePlayer(player: Player) {
        this.apiService.savePlayer(player).subscribe(
            () => { },
            error => {
                this.notificationService.setError(error.error.text);
            }
        );
    }
}