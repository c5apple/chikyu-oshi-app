import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StartComponent } from './start/start.component';

const routes: Routes = [
  { path: '', component: StartComponent },
  { path: 'home', component: StartComponent },
  { path: 'question', loadChildren: './question/question.module#QuestionModule' },
  // { path: 'question', loadChildren: () => import('./question/question.module').then(m => m.QuestionModule) },
  { path: '*', component: StartComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
