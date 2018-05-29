// Angular
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

// Services
import { UserAuthService } from '../../../services/user-auth.service';

// Utils
import { CustomValidators } from '../../../utils/validators/customValidators';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['../../../css/shared.css']
})

export class LoginComponent implements OnInit {
    form: FormGroup;

    constructor(private fb: FormBuilder,
        private router: Router,
        private userAuthService: UserAuthService) { }

    ngOnInit() {
        this.form = this.fb.group({
            username: ['', [Validators.required, Validators.minLength(4), CustomValidators.noWhiteSpaceValidator]],
            password: ['', [Validators.required, Validators.minLength(6), CustomValidators.noWhiteSpaceValidator]]
        });
    }

    login() {
        this.userAuthService.loginUser(
            this.form.controls['username'].value,
            this.form.controls['password'].value
        );
    }

    goToRegister() {
        this.router.navigateByUrl('/register');
    }
}
