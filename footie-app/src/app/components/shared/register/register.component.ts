// Angular
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

// Services
import { UserAuthService } from '../../../services/user-auth.service';
import { NotificationService } from '../../../services/notification.service';

// Utils
import { CustomValidators } from '../../../utils/validators/customValidators';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['../../../css/shared.css']
})

export class RegisterComponent implements OnInit {
    form: FormGroup;

    constructor(private fb: FormBuilder,
        private router: Router,
        private userAuthService: UserAuthService,
        private notificationService: NotificationService) { }

    ngOnInit() {
        this.form = this.fb.group({
            email: ['', [Validators.required, CustomValidators.noWhiteSpaceValidator, CustomValidators.emailValidator]],
            username: ['', [Validators.required, Validators.minLength(4), CustomValidators.noWhiteSpaceValidator]],
            password: ['', [Validators.required, Validators.minLength(6), CustomValidators.noWhiteSpaceValidator]]
        });
    }

    register() {
        this.userAuthService.registerUser(
            this.form.controls['username'].value,
            this.form.controls['email'].value,
            this.form.controls['password'].value
        );
    }

    goToLogIn() {
        this.router.navigateByUrl('/login');
    }
}
