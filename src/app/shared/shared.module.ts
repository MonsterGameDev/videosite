import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsComponent } from './tabs/tabs.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [TabsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([])
  ],
  exports: [
    TabsComponent
  ]
})
export class SharedModule { }
