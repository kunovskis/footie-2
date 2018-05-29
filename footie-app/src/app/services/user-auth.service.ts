// Angular
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

// 3rd Party
import { Observable } from 'rxjs/Observable';

// Models
import { User } from '../models/model';

// Services
import { ApiService } from './api.service';
import { NotificationService } from './notification.service';

// Components
import { HeaderComponent } from '../components/shared/header/header.component';

@Injectable()
export class UserAuthService {

    private user: User = null;

    constructor(private apiService: ApiService,
        private notificationService: NotificationService,
        private router: Router) { }

    public getLoggedInUser(): Observable<boolean> {
        return new Observable<boolean>(observer => {
            this.apiService.getUser().subscribe(
                user => {
                    HeaderComponent.setHeader(user);
                    this.user = user;
                    observer.next(true);
                },
                error => {
                    observer.next(false);
                }
            );
        });
    }

    public userHasTeam(): Observable<User> {
        return new Observable<User>(observer => {
            this.apiService.getUser().subscribe(
                user => {
                    this.user = user;
                    observer.next(user);
                },
                error => {
                    observer.next(null);
                }
            );
        });
    }

    public loginUser(username: string, password: string) {
        this.apiService.loginUser(username, password).subscribe(
            user => {
                this.user = user;
                this.router.navigateByUrl('/');
            },
            error => {
                this.setError(error.error.text);
            });
    }

    public registerUser(username: string, email: string, password: string) {
        this.apiService.registerUser(username, email, password
        ).subscribe(
            user => {
                this.user = user;
                this.router.navigateByUrl('/generate-team');
            },
            error => {
                this.setError(error.error.text);
            }
        );
    }

    public logoutUser() {
        this.apiService.logoutUser().subscribe(
            success => {
                this.router.navigateByUrl('/login');
            },
            error => {
                this.setError(error.error.text);
            }
        );
    }

    public getUser() {
        return this.user;
    }

    private setError(error: string) {
        this.notificationService.setError(error);
    }

    private succesfullLogin(user: User) {
        this.user = user;
        this.router.navigateByUrl('/');
    }

    public updateUser(user: User) {
        this.user = user;
    }

}
