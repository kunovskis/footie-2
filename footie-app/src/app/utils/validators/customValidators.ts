// Angular
import { AbstractControl } from '@angular/forms';

export class CustomValidators {

    public static noWhiteSpaceValidator(control: AbstractControl) {
        let valid = true;

        if (control.value.indexOf(' ') >= 0) {
            valid = false;
        }

        return valid ? null :
            {
                validWhitespace: valid
            };
    }

    public static emailValidator(control: AbstractControl) {
        let valid = false;

        if (control.value.indexOf('@') >= 0) {
            let [pre, after] = control.value.split('@');
            if (pre.length && after.indexOf('.') >= 0) {
                [pre, after] = after.split('.');
                if (pre.length && after.length) {
                    valid = true;
                }
            }
        }

        return valid ? null :
            {
                validEmail: valid
            };
    }

}
