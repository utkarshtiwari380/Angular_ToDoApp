import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ToDoApp';
  tasks:any = [];
  newtask(content:string){
    if(content != ''){
      this.tasks.push({id:this.tasks.length,title:content})
      console.log(this.tasks)
    }
  }

  removetask(id:number){
    this.tasks = this.tasks.filter((item:{id:number}) => item.id !-=id)
  }

  removealltasks(){
    this.tasks = []
  }

}
