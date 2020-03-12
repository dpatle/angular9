import { Directive, ElementRef, HostListener, Input } from "@angular/core";
import { element } from 'protractor';

/**
 * Directives
 * Directives are properties given to html element to change appearance or behavior of element
 * 1. Structural = examples are *ngIf and *ngFor
 * 2. Component = these can be created using @Component decorator
 * 3. attribute = it will act as attribute, as shown in this example
 */
@Directive({
    selector: '[appTooltip]'
})

export class AppTooltipDirective {
    @Input() appTooltip;
    currentElement;
    tooltipElem;
    constructor(private elementRef: ElementRef) {
        elementRef.nativeElement.style.color = 'red';
        this.currentElement = elementRef.nativeElement;
    }

    /**
     * 
     * host listener is decorator to capture event and add event listener to it
     */
    @HostListener('mouseenter', ['$event.target']) onMouseEnter(event) {
        this.tooltipElem = document.createElement('span');
        this.tooltipElem.setAttribute('class', 'tooltip');
        this.tooltipElem.innerHTML = this.appTooltip;
        this.elementRef.nativeElement.appendChild(this.tooltipElem);
    }

    @HostListener('mouseleave', ['$event.target']) onMouseLeave(event) {
        this.elementRef.nativeElement.removeChild(this.tooltipElem);
    }
}
