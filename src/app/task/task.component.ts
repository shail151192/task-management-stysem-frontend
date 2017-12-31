import { Component, OnInit } from '@angular/core';
import {AppService} from './../app.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  tasks:Array<any>=[]

  constructor(public appService: AppService, public router:Router) {
   }

  ngOnInit() {
      this.getTasks();
  }

  getTasks(){
      this.appService.getTasks().subscribe(res=>{
          this.tasks=res.data;
      }, error=>{
          console.log(error);
      })
  }

  editTask(taskId){
      this.router.navigate([`tasks/${taskId}/update`]);
  }

  deleteTask(taskId){
     this.appService.deleteTask(taskId).subscribe(res=>{
         this.getTasks();
      }, error=>{
          console.log(error);
      })
  }
}
