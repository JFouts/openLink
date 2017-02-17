import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { Question } from '../models';
import { QuestionService } from '../services';

@Component({
    moduleId: module.id,
    selector: 'ol-question-page',
    templateUrl: 'question-page.component.html',
    styleUrls: [ 'question-page.component.css' ]
})
export class QuestionPageComponent implements OnInit {
    
    questionId : Number;

    question : Question;

    constructor(
        private questionService: QuestionService,
        private route: ActivatedRoute) { }

    ngOnInit(): void {
        this.route.params
            .switchMap((params: Params) => 
                this.questionService.getQuestion(+params['id']))
            .subscribe(question => this.question = question);
    }
}