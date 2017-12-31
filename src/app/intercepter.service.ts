import {Injectable} from '@angular/core';
import {Http, Response, Request, Headers, ConnectionBackend, RequestOptions, RequestOptionsArgs} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {AuthService} from './auth.service';
import 'rxjs/add/operator/catch';
import 'rxjs/Rx'

// @Injectable()
// export class HttpInterceptor extends Http {

//     constructor(backend: ConnectionBackend, defaultOptions:RequestOptions, public aps:AuthService){
//         super(backend, defaultOptions)
//     }

//     get(url:string, options?:RequestOptionsArgs):Observable<any>{
//         this.beforeRequest();

//         return super.get(url, this.requestOptions(options))
//             .do(res=>{
//                 this.onSuccess();
//             }, error=>{
//                 this.onError();
//         })
//     }

//     post(url:string, options?:RequestOptionsArgs):Observable<any>{
//         this.beforeRequest();
//         return super.post(url, this.requestOptions(options))
//             .do(res=>{
//                 this.onSuccess();
//             }, error=>{
//                 this.onError();
//         })
//     }

//     private requestOptions(options?:RequestOptionsArgs): RequestOptionsArgs {
//         if(options == null){
//             options = new RequestOptions();
//         }
//         options.headers=null;
//         if(options.headers == null){
//             options.headers = new Headers({
//                 'Authorization': `token ${this.aps.getToken()}`,
//                 'Content-Type': 'application/josn'
//             });
//         }

//         return options;
//     }

//     beforeRequest(){
//         console.log("yaaay requesting....")
//     }

//     onCatch(){
//         console.log("exception catched");
//     }

//     onSuccess(){
//         console.log("request successfully happend");
//     }

//     onError(){
//         console.log("An error has occured");
//     }

// }
@Injectable()
export class HttpInterceptor extends Http {

    constructor(backend: ConnectionBackend, defaultOptions: RequestOptions, public aps:AuthService) {
        super(backend, defaultOptions);
    }

    request(url: string | Request, options?: RequestOptionsArgs): Observable<Response> {
        return super.request(url, options);
    }

    get(url: string, options?: RequestOptionsArgs): Observable<Response> {
        return super.get(url, this.getRequestOptionArgs(options));
    }

    post(url: string, body: string, options?: RequestOptionsArgs): Observable<Response> {
        return super.post(url, body, this.getRequestOptionArgs(options));
    }

    put(url: string, body: string, options?: RequestOptionsArgs): Observable<Response> {
        return super.put(url, body, this.getRequestOptionArgs(options)); // Here is the error
    }

    patch(url: string, body: string, options?: RequestOptionsArgs): Observable<Response> {
        return super.patch(url, body, this.getRequestOptionArgs(options)); // Here is the error
    }

    delete(url: string, options?: RequestOptionsArgs): Observable<Response> {
        return super.delete(url, this.getRequestOptionArgs(options));
    }

    getRequestOptionArgs(options?: RequestOptionsArgs): RequestOptionsArgs {
        if(options == null){
            options = new RequestOptions();
        }
        if(options.headers == null){
            options.headers = new Headers({
                'Authorization': `token ${this.aps.getToken()}`
            });
        }
        return options;
    }
}
