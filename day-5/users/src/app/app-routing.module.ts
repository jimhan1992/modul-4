import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AddComponent} from "./add/add.component";
import {UsersComponent} from "./users/users.component";

const routes: Routes = [
  {
    path: 'add',component : AddComponent,
  },
  {
    path: '',component : UsersComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
