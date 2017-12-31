import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {HttpInterceptor} from './intercepter.service';
import {CookieService} from 'ngx-cookie-service';


@Injectable()
export class AppService {
    private url='http://localhost:8000/';
    constructor(private http: HttpInterceptor, public cookie: CookieService){}

    registerUser(params: any):Observable<any>{

        return this.http.post(`${this.url}`+'users/', params)
            .map((response)=>{
                return response.json();
            })
            .catch((error) => {
                return Observable.throw(error.message || error)
            });
    }

    loginUser(params: any):Observable<any>{

        return this.http.post(`${this.url}`+'users/login/', params)
            .map((response)=>{
                return response.json();
            })
            .catch((error) => {
                return Observable.throw(error.message || error)
            });
    }

    createTask(params: any):Observable<any>{
        return this.http.post(`${this.url}`+'tasks/', params)
            .map((response)=>{
                return response.json();
            })
            .catch((error) => {
                return Observable.throw(error.message || error)
            });
    }


    getTasks():Observable<any>{
        return this.http.get(`${this.url}`+'tasks/')
            .map((response)=>{
                return response.json();
            })
            .catch((error) => {
                return Observable.throw(error.message || error)
            });
    }

    getTask(id:string):Observable<any>{
        return this.http.get(`${this.url}tasks/${id}`)
            .map((response)=>{
                return response.json();
            })
            .catch((error) => {
                return Observable.throw(error.message || error)
            });
    }

    updateTask(params:any, id:string):Observable<any>{
        return this.http.patch(`${this.url}tasks/${id}/`, params)
            .map((response)=>{
                return response.json();
            })
            .catch((error) => {
                return Observable.throw(error.message || error)
            });
    }

    deleteTask(id:string):Observable<any>{
        return this.http.delete(`${this.url}tasks/${id}`)
            .map((response)=>{
                return response.json();
            })
            .catch((error) => {
                return Observable.throw(error.message || error)
            });
    }



}