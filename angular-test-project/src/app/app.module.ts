import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

/**
 * 
# Prerequisites

  - NodeJS latest version

  - Visual Studio Code or other IDE/Editor 
  (WebStorm - paid, Sumlime text, atom)

  - Basic knowledge of HTML, CSS and Javascript (ES6)



install angular cli globally
- npm install -g @angular/cli
- ng --version (tell version of angular cli)
 
 To generate angular project 
  - ng new angular-test-project

  To run the project
  - npm start


 */

/**
 * atscript (@) or typescript (strictly typed version of Javascript)
 * typescript to javascript transpilation can be done using babel, webpack
 * Angular cli is internallay using webpack
 * ngModule decorator
 * metadata -
 *  declaration - include all the components/directives
 *  imports - other module dependency (child module and parent module can have same dependency and treeshaking will handle redundant dependency injection)
 *  providers - service dependencies
 *  exports
 *  bootstrap
 */
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    /**
     * forms module required for ngModel directive
     */
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
