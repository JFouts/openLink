import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { RouterModule }  from '@angular/router';

import { ActivatedRoute }   from '@angular/router';

import { AppComponent } from './app.component';
import * as question from './question';
import * as comments from './comments';
import * as user from './user';
import * as services from './services';

import { AppRoutingModule } from './app-routing.module';


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        question.QuestionPageComponent,
        question.QuestionCreatePageComponent,
        question.QuestionDetailComponent,
        comments.CommentsComponent,
        user.UserTagComponent
    ],
    providers: [
        services.QuestionService
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }