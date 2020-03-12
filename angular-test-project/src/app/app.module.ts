import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LeftNavComponent } from './mailbox/left-nav/left-nav.component';
import { MailboxComponent } from './mailbox/mailbox.component';
import { AppTooltipDirective } from './shared/tooltip.directive';
import { TitleNamePipe } from './shared/nametitle.pipe';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { UserService } from './shared/user.service';

@NgModule({
  declarations: [
    TitleNamePipe,
    AppTooltipDirective,
    LeftNavComponent,
    MailboxComponent,
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [HttpClient, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
