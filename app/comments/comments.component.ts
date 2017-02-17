import { Component, OnInit } from '@angular/core';
import { Comment } from '../models';

@Component({
    moduleId: module.id,
    selector: "ol-comments",
    templateUrl: 'comments.component.html',
    styleUrls: [ 'comments.component.css' ]
})
export class CommentsComponent implements OnInit
{
    comments = [new Comment(), new Comment(), new Comment()];

    ngOnInit(): void {
        this.comments[0].id = 1;
        this.comments[0].text = "Good Point!";

        this.comments[1].id = 1;
        this.comments[1].text = "You are stupid! You are stupid! You are stupid! You are stupid! You are stupid! You are stupid! You are stupid! You are stupid! You are stupid! You are stupid! You are stupid! You are stupid!You are stupid! You are stupid!";

        this.comments[2].id = 1;
        this.comments[2].text = "DOLT!";
    }
}