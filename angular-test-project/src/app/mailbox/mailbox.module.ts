import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { MailboxRoutingModule } from './mailbox-routing.module';
import { MailboxComponent } from './mailbox.component';
import { LeftNavComponent } from './left-nav/left-nav.component';
import { Router } from '@angular/router';
import { UserService } from '../shared/user.service';

@NgModule({
  declarations: [
    LeftNavComponent,
    MailboxComponent
  ],
  imports: [
    FormsModule,
    MailboxRoutingModule
  ],
  exports: [
    LeftNavComponent,
    MailboxComponent
  ],
  providers: [
    Router,
    UserService
  ]
})
export class MailboxModule { }
