import { Injectable } from "@angular/core";
import { UserData } from './common.model';

/**
 * Services = services are singleton classes in angular
 * instance of service will be available for complete lifecycle of angular app
 * services are used for managing data/business logic/communicating componnets
 */

 @Injectable()

 export class UserService {
     private userData: UserData;
     constructor() {
         this.userData = {
             userId:1,
             id:1,
             title: 'delectus aut autem',
             completed:false
            };
     };

     get userData$() {
         return this.userData;
     }

     set userData$(data) {
         this.userData = data;
     }
 }
