import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MailboxComponent } from './mailbox/mailbox.component';
import { LeftNavComponent } from './mailbox/left-nav/left-nav.component';

@NgModule({
  declarations: [
    AppComponent,
    LeftNavComponent,
    MailboxComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
