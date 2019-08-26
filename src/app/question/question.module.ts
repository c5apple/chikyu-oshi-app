import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionComponent } from './question.component';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [QuestionComponent],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [
    QuestionComponent
  ]
})
export class QuestionModule { }
