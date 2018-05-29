// Angular
import { Component, OnInit } from '@angular/core';

// Services
import { UserAuthService } from './services/user-auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private userAuthService: UserAuthService) { }

  ngOnInit() {
    this.userAuthService.getLoggedInUser();
  }
}
