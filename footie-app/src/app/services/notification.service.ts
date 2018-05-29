// Angular
import { Injectable } from '@angular/core';

@Injectable()
export class NotificationService {

    private error: string;
    private timeout: any;

    constructor() { }

    public setError(error: string) {
        this.error = '';
        clearTimeout(this.timeout);
        this.error = error;
        this.timeout = setTimeout(() => {
            this.error = '';
        }, 2500);
    }

    public getError() {
        return this.error;
    }

}
