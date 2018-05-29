// Angular
import { Component, OnInit } from '@angular/core';

// Services
import { UserAuthService } from '../../../services/user-auth.service';

@Component({
    selector: 'app-logout',
    template: ``
})

export class LogoutComponent implements OnInit {

    constructor(private userAuthService: UserAuthService) { }

    ngOnInit() {
        this.userAuthService.logoutUser();
    }
}
