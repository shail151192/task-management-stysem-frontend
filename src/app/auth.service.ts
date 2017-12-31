import { Injectable } from '@angular/core';
import {CookieService} from 'ngx-cookie-service'

@Injectable()
export class AuthService {

  constructor(private cookie:CookieService) {}

   isAuthenticated():boolean{
        const token = this.cookie.get('task_token');
        if(token){
            return true;
        }
        return false;
    }

    setToken(token){
        this.cookie.set('task_token', token);
    }

    getToken(){
        return this.cookie.get('task_token');
    }

    setProfile(user){
        localStorage.setItem('user', user);
    }

    getProfile(){
        return localStorage.getItem('user');
    }

    logout(){
        this.cookie.delete('task_token');
        localStorage.removeItem('user');
    }
}