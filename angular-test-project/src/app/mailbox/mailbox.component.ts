import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { LeftNavComponent } from './left-nav/left-nav.component';

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
