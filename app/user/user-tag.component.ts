import { Component, OnInit } from '@angular/core';
import { User } from '../models';


@Component({
    moduleId: module.id,
    selector: 'ol-user-tag',
    templateUrl: 'user-tag.component.html',
    styleUrls: [ 'user-tag.component.css' ]
})
export class UserTagComponent implements OnInit {
    
    user: User;

    ngOnInit(): void {
        this.user = new User();

        this.user.avitarUrl = 'https://cdn1.iconfinder.com/data/icons/user-pictures/101/malecostume-512.png';
        this.user.fullName = 'Justin Fouts';
    }
}