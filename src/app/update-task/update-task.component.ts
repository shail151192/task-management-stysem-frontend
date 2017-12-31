import { Component, OnInit, ViewContainerRef } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {AppService} from './../app.service';
import {ToastsManager} from 'ng2-toastr/ng2-toastr';

@Component({
  selector: 'app-update-task',
  templateUrl: './update-task.component.html',
  styleUrls: ['./update-task.component.css']
})
export class UpdateTaskComponent implements OnInit {

  taskId:string='';
  task:Object={};
  constructor(public router: Router, public route:ActivatedRoute, public appService: AppService, public toastr:ToastsManager, public vcr:ViewContainerRef) {
       this.toastr.setRootViewContainerRef(vcr);
       this.taskId=this.route.params['value']['id'];
  }
  ngOnInit() {

      this.getTask();
  }

   getTask(){
      this.appService.getTask(this.taskId).subscribe(res=>{
         this.task=res.data;
      }, error=>{
          console.log(error);
      })
  }

  updateTask(){
       this.appService.updateTask(this.task, this.taskId).subscribe(res=>{
          this.router.navigate(['/tasks']);
      }, error=>{
          let data=JSON.parse(error._body);
          this.toastr.error(data.message);
      })
  }

  backButton(){
        this.router.navigate(['/tasks']);
  }

}
