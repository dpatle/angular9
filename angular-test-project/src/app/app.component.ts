import { Component } from '@angular/core';

/**
 * Component decorator and metadata
 * selector: this will act as element tag to use this component
 * selector: <app-root-test></app-root-test>
 * templateURL: is view for my component - path of html file
 * template: template (view) for my component
 * styleURL: css styling file path
 */
@Component({
  selector: 'app-root-test',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

/**
 * databinding
 * 1. interpollation - component class (Controller) to view
 * 2. Event - view to controller
 * 3. Two way data binding
 * *ngFor - iterates the array list and render the data on UI
 * *ngIf - dynamically adding/removing elements from DOM depending on variable value or expression output
 */
export class AppComponent {
  title = 'angular-test-project';
  myPageConent: string;
  show = true;

  fruits: Array<Object>;

  constructor() {
    this.myPageConent = 'This is home page from variable';
    this.fruits = [
      { name: 'Apple' },
      { name: 'Banana' },
      { name: 'Grapes' },
      { name: 'Watermellon' }
    ];
  }

  /**
   * 
   * todo: detectchanges method
   */

  onClick(event) {
    this.myPageConent = 'some new content';
    this.fruits.push('Mango');
  }

  shouldShowCircle() {
    return this.show;
  }
  /**
   * lifecycle hooks
   */
}
