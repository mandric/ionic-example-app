import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserResolver } from '../services/users-resolver.service';
import { ViewUserPage } from './view-user.page';

const routes: Routes = [
  {
    path: '',
    component: ViewUserPage,
    resolve: {
      user: UserResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewUserPageRoutingModule {}
