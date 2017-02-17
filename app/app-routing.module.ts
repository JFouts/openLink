import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { QuestionPageComponent, QuestionCreatePageComponent }   from './question';

const routes: Routes = [
  { path: 'question/:id',  component: QuestionPageComponent },
  { path: 'question-create',  component: QuestionCreatePageComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}