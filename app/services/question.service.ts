import { Injectable } from '@angular/core';
import { Question } from '../models';

@Injectable()
export class QuestionService {

    getQuestion(questionId: Number): Promise<Question> {
        var question =  new Question();
        question.id = questionId;
        question.askedDate = new Date();
        question.name = 'How do you create a table in Markdown?';
        question.userId = 1;
        question.tags = [ 'markdown', 'tables' ];
        question.mdText = `
I am trying to figure out how to make a table in markdown like this one:

| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |
        `;

        return new Promise(resolve => {
            setTimeout(() => resolve(question), 2000);
        });
    }

}