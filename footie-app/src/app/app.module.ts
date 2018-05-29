// Angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// 3rd Party
import { LoadingModule } from 'ngx-loading';

// Components
import { AppComponent } from './app.component';
import { LoginComponent } from './components/shared/login/login.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { RegisterComponent } from './components/shared/register/register.component';
import { NotificationComponent } from './components/shared/notification/notification.component';
import { NavigationComponent } from './components/shared/navigation/navigation.component';
import { LogoutComponent } from './components/shared/logout/logout.component';
import { TableComponent } from './components/shared/table/table.component';
import { AiTeamBoxComponent } from './components/shared/ai-team-box/ai-team-box.component';
import { StoreItemComponent } from './components/shared/store-item/store-item.component';
import { GenerateTeamComponent } from './components/player/generate-team/generate-team.component';
import { HomeComponent } from './components/player/home/home.component';
import { PlayComponent } from './components/player/play/play.component';
import { StoreComponent } from './components/player/store/store.component';
import { ViewTeamComponent } from './components/player/view-team/view-team.component';

// Services
import { ApiService } from './services/api.service';
import { UserAuthService } from './services/user-auth.service';
import { NotificationService } from './services/notification.service';
import { FifaService } from './services/fifa.service';
import { PlayerService } from './services/player.service';
import { PlayService } from './services/play.service';

// Route Guards
import { NotLoggedRouteGuard } from './auth-guards/not-logged-routeguard';
import { LoggedRouteGuard } from './auth-guards/logged-routeguard';
import { HasTeamRouteGuard } from './auth-guards/has-team-routeguard';

// Routes
import { appRoutes } from './routes';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    NotificationComponent,
    TableComponent,
    AiTeamBoxComponent,
    StoreItemComponent,
    HomeComponent,
    NavigationComponent,
    PlayComponent,
    LogoutComponent,
    GenerateTeamComponent,
    StoreComponent,
    HeaderComponent,
    ViewTeamComponent
  ],
  imports: [
    LoadingModule,
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [
    ApiService,
    UserAuthService,
    NotificationService,
    PlayerService,
    FifaService,
    PlayService,
    NotLoggedRouteGuard,
    LoggedRouteGuard,
    HasTeamRouteGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
