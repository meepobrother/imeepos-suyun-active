import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActiveIndexRoutingModule } from './active-index-routing.module';
import { ActiveIndexComponent } from './active-index.component';
import {ActiveListModule} from "../active-list/active-list.module";

@NgModule({
  imports: [
    CommonModule,
    ActiveIndexRoutingModule,
    ActiveListModule
  ],
  declarations: [ActiveIndexComponent]
})
export class ActiveIndexModule { }
