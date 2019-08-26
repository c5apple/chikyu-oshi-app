import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StartComponent } from './start.component';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [StartComponent],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [
    StartComponent
  ]
})
export class StartModule { }
