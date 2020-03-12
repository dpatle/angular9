import { Component, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserService } from './shared/user.service';

/**
 * To generate new component
 * ng generate component mailbox
 */
@Component({
  selector: 'app-root-test',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class AppComponent {
  
  constructor(
    private http: HttpClient,
    public userService: UserService) {
    // this.http.get('https://jsonplaceholder.typicode.com/todos/1').subscribe(response => {
    //  console.log(response);
    // });
  }
}
