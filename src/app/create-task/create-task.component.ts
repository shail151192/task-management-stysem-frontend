import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { AppService} from './../app.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ToastsManager} from 'ng2-toastr/ng2-toastr';


@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent implements OnInit {

  task:Object={}
  constructor(public appService: AppService, public router:Router, public toastr:ToastsManager, public vcr:ViewContainerRef) {
      this.toastr.setRootViewContainerRef(vcr);
  }

  ngOnInit() {

  }

  onSubmit(){
      this.appService.createTask(this.task).subscribe(res=>{
          this.router.navigate([`/tasks`]);
      }, error=>{
           let data=JSON.parse(error._body);
          this.toastr.error(data.message);
          console.log(error);
      })
  }
}
