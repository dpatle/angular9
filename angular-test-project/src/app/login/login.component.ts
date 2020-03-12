import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { UserService } from '../shared/user.service';

@Component({
    selector: 'app-login',
    templateUrl: 'login.component.html',
    styleUrls: ['login.component.css']
})

export class LoginComponent {
    constructor(public userService: UserService) {
        
    }

    onLoginClick() {
        this.userService.userData$ = {
            "userId":1,
            "id":1,
            "title":"John Papa",
            "completed":false
           };
    }
}
