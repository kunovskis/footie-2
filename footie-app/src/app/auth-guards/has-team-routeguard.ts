// Angular
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

// 3rd Party
import { Observable } from 'rxjs/Observable';

// Services
import { UserAuthService } from '../services/user-auth.service';

@Injectable()
export class HasTeamRouteGuard implements CanActivate {

    constructor(private userAuthService: UserAuthService,
        private router: Router) { }

    canActivate() {
        return new Observable<boolean>(observer => {
            this.userAuthService.userHasTeam().subscribe(
                user => {
                    if (!user) {
                        this.router.navigateByUrl('/login');
                        return observer.next(false);
                    }
                    if (user.hasTeam) {
                        this.router.navigateByUrl('/');
                        return observer.next(false);
                    }
                    return observer.next(true);
                }
            );
        });
    }
}
