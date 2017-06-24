import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActiveListComponent } from './active-list/active-list.component';
import { ActiveItemComponent } from './active-item/active-item.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ActiveListComponent, ActiveItemComponent],
  exports: [ActiveListComponent, ActiveItemComponent]
})
export class ActiveListModule { }
