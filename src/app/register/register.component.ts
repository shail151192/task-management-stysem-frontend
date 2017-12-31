import { Component, OnInit,ViewContainerRef } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AppService} from './../app.service';
import {ToastsManager} from 'ng2-toastr/ng2-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

   user:Object={}
  constructor(public router:Router, public appService: AppService, private toastr:ToastsManager, private vcr:ViewContainerRef) {
          this.toastr.setRootViewContainerRef(vcr);

   }

  ngOnInit() {

  }

  goToLogin(){
      this.router.navigate(['/login']);
  }

  onSubmit(){
      if(!this.user['first_name'] || !this.user['last_name'] || !this.user['username'] || !this.user['username'] ||  !this.user['password']){
        this.toastr.error('Please fill all the fields');
        return;
      }

      this.appService.registerUser(this.user).subscribe(res=>{
          this.user={};
          this.toastr.success('user registered successfully');
      }, error=>{
          let data=JSON.parse(error._body);
          this.toastr.error(data.message);
      })
  }
}
