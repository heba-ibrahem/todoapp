import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent  {
  todolist:[]=[];
  newtodo='';
  isdone:boolean=false;
  // public newtodo;
  constructor(){
   
  }

  add(){
    console.log(this.newtodo);
    this.todolist.push(this.newtodo);
    this.newtodo="";
  }

   done(index:number){
    console.log("done")
    console.log(index)
    // let todoToComplete = this.todolist.find((newtodo) => newtodo.index == index)
    this.isdone=!this.isdone  
  }
  public taskcounter(){
    console.log(this.todolist.length)
    return this.todolist.length;
  }



  likenumber: number=100;
  dislikenumber: number=25;
  liked:boolean=true;
  disliked:boolean = true;
  like(){
    // this.likenumber++;
    // this.liked=!this.liked;
    if(this.liked=!this.liked){
      this.likenumber--
    }
   
    else{
      this.likenumber++
    }
  }

  dislike(){
    // this.dislikenumber++;
    // this.disliked=!this.disliked
    if(this.disliked=!this.disliked){
      this.dislikenumber--
    }
    else{
      this.dislikenumber++
    }
  }
}








