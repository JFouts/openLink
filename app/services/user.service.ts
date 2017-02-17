import { Injectable } from '@angular/core';
import { User } from '../models';

@Injectable()
export class UserService {

    getQuestion(username: String): Promise<User> {
        var user =  new User();
        user.username = username;
        user.avitarUrl = '';
        user.fullName = 'Justin Fouts';

        return new Promise(resolve => {
            setTimeout(() => resolve(user), 2000);
        });
    }

}