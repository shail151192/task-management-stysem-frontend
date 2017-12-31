import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import { AppRoutesModule} from './app.routes';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { RegisterComponent } from './register/register.component';
import { TaskComponent } from './task/task.component';
import { NavbarComponent } from './navbar/navbar.component';
import {AppService} from './app.service';
import { CreateTaskComponent } from './create-task/create-task.component';
import {HttpInterceptor} from './intercepter.service';
import {XHRBackend, RequestOptions} from '@angular/http';
import {CookieService} from 'ngx-cookie-service';
import {AuthGuardService} from './auth-gaurd.service';
import {AuthService} from './auth.service';
import { UpdateTaskComponent } from './update-task/update-task.component';
import {ToastModule} from 'ng2-toastr/ng2-toastr';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LogoutComponent,
    RegisterComponent,
    TaskComponent,
    NavbarComponent,
    CreateTaskComponent,
    UpdateTaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutesModule,
    FormsModule,
    HttpModule,
    ToastModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers:[AppService, CookieService, AuthGuardService, AuthService,
            {
                provide: HttpInterceptor,
                useFactory: HttpInterceptorT,
                deps: [ XHRBackend, RequestOptions, AuthService]
            }
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }

export function HttpInterceptorT(backend: XHRBackend, defaultOptions: RequestOptions, authService: AuthService) {
     return new HttpInterceptor(backend, defaultOptions, authService);
}