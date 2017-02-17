import { Component, Input, OnInit } from '@angular/core';
import { Question } from '../models';

@Component({
    moduleId: module.id,
    selector: "ol-question-detail",
    templateUrl: "question-detail.component.html",
    styleUrls: [ "question-detail.component.css" ]
})
export class QuestionDetailComponent implements OnInit
{
    @Input()
    question: Question;

    ngOnInit(): void {
        
    }
}