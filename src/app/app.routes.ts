import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginComponent } from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {TaskComponent} from './task/task.component';
import {CreateTaskComponent} from './create-task/create-task.component';
import {UpdateTaskComponent} from './update-task/update-task.component';
import { AuthGuardService as AuthGuard } from './auth-gaurd.service';



const routes= [
    {path:'register', component:RegisterComponent},
    {path: 'login', component:LoginComponent},
    {path:'tasks', component:TaskComponent, canActivate: [AuthGuard]},
    {path:'tasks/create', component:CreateTaskComponent, canActivate: [AuthGuard]},
    {path: 'tasks/:id/update', component:UpdateTaskComponent, canActivate: [AuthGuard]},
    {path:'*', redirectTo:'/login'}

]

@NgModule({
    imports:[
        RouterModule.forRoot(routes, {useHash:true})
    ],
    exports:[RouterModule]
})

export class AppRoutesModule {

}