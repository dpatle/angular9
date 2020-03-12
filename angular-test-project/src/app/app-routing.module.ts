import { NgModule, Injectable } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';

@Injectable()
export class MyAuthClass implements CanActivate {
  canActivate() {
    /**
     * logic to authenticate user
     */
    let isAuthenticated: boolean = false;
    if (Math.random() > 0.5) {
      isAuthenticated = true;
    }
    return true;
  }
}

const routes: Routes = [{
  path: '',
  loadChildren: () => import('./login/login-routing.module').then(mod => mod.LoginRoutingModule)
}, {
  path: 'login',
  loadChildren: () => import('./login/login-routing.module').then(mod => mod.LoginRoutingModule)
}, {
  path: 'mailbox',
  loadChildren: () => import('./mailbox/mailbox-routing.module').then(mod => mod.MailboxRoutingModule),
  canActivate: [MyAuthClass]
}, {
  path: 'mailbox/:id',
  loadChildren: () => import('./mailbox/mailbox-routing.module').then(mod => mod.MailboxRoutingModule),
  canActivate: [MyAuthClass]
}
];

// {
//   path: 'mailbox',
//   component: MailboxComponent
// }

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  // imports: [RouterModule.forRoot(routes, { useHash: true})],
  exports: [RouterModule],
  providers: [MyAuthClass]
})
export class AppRoutingModule { }
