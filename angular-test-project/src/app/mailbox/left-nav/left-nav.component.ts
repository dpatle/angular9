import { Component, Input, OnInit, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'app-left-nav',
    templateUrl: './left-nav.component.html',
    styleUrls: ['./left-nav.component.css']
})

export class LeftNavComponent implements OnInit {
    /**
     * Parent to child comm: To send data from parent to child we can use Input decorator
     */
    /**
     * <app-mail-box> (navLinks)
     *      <app-left-nav [navData]="navLinks"></app-left-nav>
     * </app-mail-box>
     */
    @Input() navData: Array<string>;

    /**
     * Child to parent communication
     * <app-mail-box>
     *      <app-left-nav [navData]="navLinks" (menuSelectionChange)="handlerFunction()"></app-left-nav>
     * </app-mail-box>
     */
    @Output() menuSelectionChange = new EventEmitter();

    /**
     * Parent to child- data binding => parent has some data and child can receive it and use that to bind in views => Input
     * parent to child- listener => action is happending in parent and child should listen it => use lifecycle hook called - ngOnChanges
     * parent to child- listener => take reference of child class in parent comopnent and access required methods - ViewChild
     * Child to parent => child has some action, parent will get notified using an event => Output decorator
     * Communicating independent/unrelational comopnents: Service (rx concepts - ) - to be added in service session
     */

     /**
      * Lifecycle hooks
      */

      /**
       * Constructor -executes first
       * It wont have data provided by parent
       * input properties will be undefined in this phase
       */
    constructor() {
    }

    /**
     * This is first method to get called in lifecycle of component
     * It will again get called whenever parent is changing value of data binded to Input property of component
     */
    ngOnChanges(changes) {
        if (changes.navData) {
            // this.processData();
        }
    }

    /**
     * Second method in lifecycle hook 
     * Show write all the execution of logic needed at start of component load
     */
    ngOnInit() {
       /**
        * process the input data and modify it according to business requiremtn
        */
    }

    /**
     * Third method
     * detects the changes that angular cannot detect by its own
     */
    ngDoCheck() {

    }


    /**
     * External contents are initialized
     */
    ngOnContentInit() {

    }

    /**
     * External contents are checked for data binding and angular processing
     */
    ngAfterContentChecked() {

    }

    /**
     * once view is initialized, dom elements are loaded including all child
     */
    ngOnViewInit() {

    }

    /**
     * angular has done checking of view and childs DOM
     */
    ngOnViewChecked() {

    }

    /**
     * Last method to get called in component lifecycle
     * Unsubscribe andy events attached to observables
     * this is required for performance
     */
    ngOnDestroy() {

    }

    onLinkClick(linkIndex: number) {
        this.menuSelectionChange.emit(linkIndex);
    }

    processData() {
        this.navData.push('last');
    }
}

