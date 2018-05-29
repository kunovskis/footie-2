// Angular
import { Routes } from '@angular/router';

// Components
import { LoginComponent } from './components/shared/login/login.component';
import { RegisterComponent } from './components/shared/register/register.component';
import { HomeComponent } from './components/player/home/home.component';
import { LogoutComponent } from './components/shared/logout/logout.component';
import { GenerateTeamComponent } from './components/player/generate-team/generate-team.component';
import { PlayComponent } from './components/player/play/play.component';
import { StoreComponent } from './components/player/store/store.component';
import { ViewTeamComponent } from './components/player/view-team/view-team.component';

// Route Guards
import { NotLoggedRouteGuard } from './auth-guards/not-logged-routeguard';
import { LoggedRouteGuard } from './auth-guards/logged-routeguard';
import { HasTeamRouteGuard } from './auth-guards/has-team-routeguard';

export const appRoutes: Routes = [
    { path: 'login', component: LoginComponent, canActivate: [NotLoggedRouteGuard] },
    { path: 'register', component: RegisterComponent, canActivate: [NotLoggedRouteGuard] },
    {
        path: '', component: HomeComponent, canActivate: [LoggedRouteGuard], children: [
            { path: '', component: ViewTeamComponent },
            { path: 'generate-team', component: GenerateTeamComponent, canActivate: [HasTeamRouteGuard] },
            { path: 'play-team', component: PlayComponent },
            { path: 'store', component: StoreComponent }
        ]
    },
    { path: 'logout', component: LogoutComponent, canActivate: [LoggedRouteGuard] },
    { path: '**', redirectTo: '/login' }
];
