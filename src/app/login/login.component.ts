import { Component, OnInit,ViewContainerRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {AuthService} from './../auth.service';
import {AppService} from './../app.service';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user:Object={}
  constructor(public router: Router, public authService: AuthService, private appService:AppService, public toastr:ToastsManager, public vcr:ViewContainerRef) {
    this.toastr.setRootViewContainerRef(vcr);
  }

  ngOnInit() {
    this.isAuthenticated();
  }


  registerUser(){
      this.router.navigate([`/register`])
  }

  loginUser(){
      this.appService.loginUser(this.user).subscribe(res=>{
          this.authService.setToken(res.data['token']);
          this.authService.setProfile(res.data['user']);
          window.location.reload();
          this.router.navigate([`/tasks`]);
      }, error=>{
          let data=JSON.parse(error._body);
          this.toastr.error(data.message);
      })
  }

  isAuthenticated(){
    if(this.authService.getToken() && this.authService.getProfile()){
      this.router.navigate(['/tasks']);
    }
  }
}
