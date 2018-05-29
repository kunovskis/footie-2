// Angular
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

// 3rd Party
import { Observable } from 'rxjs/Observable';

// Services
import { UserAuthService } from '../services/user-auth.service';

@Injectable()
export class LoggedRouteGuard implements CanActivate {

    constructor(private userAuthService: UserAuthService,
        private router: Router) { }

    canActivate() {
        return new Observable<boolean>(observer => {
            this.userAuthService.getLoggedInUser().subscribe(
                valid => {
                    if (!valid) {
                        this.router.navigateByUrl('/login');
                    }
                    return observer.next(valid);
                }
            );
        });
    }
}
