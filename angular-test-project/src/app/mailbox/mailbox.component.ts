import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { LeftNavComponent } from './left-nav/left-nav.component';
import { Router, RouterEvent, ActivationEnd } from '@angular/router';
import { UserService } from '../shared/user.service';

@Component({
    selector: 'app-mailbox',
    templateUrl: 'mailbox.component.html',
    styleUrls: ['mailbox.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class MailboxComponent {
    @ViewChild(LeftNavComponent) leftNavComponent: LeftNavComponent;
    navLinks = [
        'Componse',
        'Inbox',
        'Sent Items'
    ];

    constructor(private router: Router,
        public userService: UserService) {
        this.router.events.subscribe((event: ActivationEnd) => {
            if (event.snapshot && event.snapshot.params) {
                const paramID = event.snapshot.params;
                // load content for paramID
            }
        });
    }

    onSelectionChange(event) {

    }

    changeData() {
        this.navLinks = ['Componse1',
            'Inbox2',
            'Sent Items3'];
        setTimeout(() => {
            this.leftNavComponent.processData();
        }, 100);
    }
}
