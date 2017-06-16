/**
 * Created by t.ruscica on 02/02/2017.
 */
// Import our dependencies
import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from "../login/login.component";
import {MessageComponent} from "../message/message.component";
import {ListComponent} from "../list/list.component";
import {CompleteComponent} from "../complete/complete.component";

// Define which component should be loaded based on the current URL
const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'list',
    component: ListComponent
  },
  {
    path: 'message',
    component: MessageComponent
  },
  {
    path: 'complete',
    component: CompleteComponent
  }
];
export const routing = RouterModule.forRoot(appRoutes, {useHash: true});
