import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StartComponent } from './start/start.component';
import { QuestionComponent } from './question/question.component';

const routes: Routes = [
  { path: '', component: StartComponent },
  { path: 'home', component: StartComponent },
  { path: 'question', component: QuestionComponent },
  { path: 'question/:cd', component: QuestionComponent },
  { path: '*', component: StartComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
