import * as marked from 'marked';

export class Question {
    id: Number;
    name: String;
    mdText: string;
    tags: String[];
    askedDate: Date;
    userId: Number;

    getHtmlText(): String {
        if(this.mdText)
            return marked(this.mdText);
        else
            return '';
    }
}