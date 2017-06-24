import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ActiveIndexComponent} from "./active-index.component";

const routes: Routes = [
  {
    path: '',
    component: ActiveIndexComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ActiveIndexRoutingModule { }
