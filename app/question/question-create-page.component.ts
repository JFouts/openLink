import { Component } from '@angular/core';
import { Question } from '../models';
import { QuestionService } from '../services';

@Component({
    moduleId: module.id,
    selector: 'ol-question-create-page',
    templateUrl: 'question-create-page.component.html',
    styleUrls: [ 'question-create-page.component.css' ]
})
export class QuestionCreatePageComponent {

    question = new Question();

    constructor(
        private questionService: QuestionService) {}

}