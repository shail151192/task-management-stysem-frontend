import { Component, OnInit, OnDestroy } from '@angular/core';
import {AuthService} from './../auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private authService: AuthService, public router:Router) { }

  username:string=''
  ngOnInit() {
     this.getProfile();
  }

  getProfile(){
       this.username = this.authService.getProfile();
  }

  logout(){
      this.authService.logout();
      this.username=null;
      this.router.navigate(['/login']);
  }
}
