// Angular
import { Component } from '@angular/core';
import { trigger, state, transition, style, animate } from '@angular/animations'

// Services
import { NotificationService } from '../../../services/notification.service';

@Component({
    selector: 'app-notification',
    templateUrl: './notification.component.html',
    styleUrls: ['../../../css/shared.css'],
    animations: [
        trigger('visibilityChanged', [
            state('true', style({ opacity: 0.7, transform: 'scale(1.0)' })),
            state('false', style({ opacity: 0, transform: 'scale(0.0)' })),
            transition('true => false', animate('1s')),
            transition('false => true', animate('1s'))
        ])
    ]
})

export class NotificationComponent {

    public error: string = null;
    isVisible = false;

    constructor(private notificationService: NotificationService) { }

    getError(): string {
        this.error = this.notificationService.getError();
        if (this.error) {
            this.isVisible = true;
        } else {
            this.isVisible = false;
        }
        return this.error;
    }

}
