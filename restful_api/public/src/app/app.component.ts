import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
       title = 'Restful Task/Angular';
       tasks: [];	//Sets type to an array. 
       oneTask: any;//Sets type to any data type.
       newTask: any;;	//sets type to an object.


       //Here we can use classes from the http.Service.ts
       constructor(private _httpService: HttpService){

       }

       ngOnInit(){
       	//Gets invoked right away.
       		this.newTask = {name:'', description:''}       	
       }

        createTask(newTask){
        	console.log("In component..")
		    let taskObservable = this._httpService.createTask(this.newTask)
		    taskObservable.subscribe(data=>{
		      console.log("Creating a new task..", data)
		      this.getAllServiceTasks()
		   })
		 }

       	//gets all tasks/home
       	getAllServiceTasks(){
       		let observable = this._httpService.getAllTasks()
       		//watches/subscribes for the data from the server.
       		//once return console log it and assign data to tasks to be shown in view.
       		observable.subscribe(data => {
       			console.log("Here are all the tasks", data)
       			// In this example, the array of tasks is assigned to the key 'tasks' in the data object. 
       			this.tasks = data['tasks'];
       		})
       	}
       	//takes an id parameter
       	getOneServiceTask(_id: string){
       		let observable = this._httpService.getOneTask(_id)
       		observable.subscribe(data => {
       			console.log("Here is the task", data)
       			this.oneTask = data;
       		})
       	}
       	removeServiceTask(_id: string){
       		let observable = this._httpService.deleteTask(_id)
       		observable.subscribe(data => {
       			console.log("Deleting this task..", data)
       			this.oneTask = data;
       		})
       		
       	}
       	updateServiceTask(_id: string, newTaskData){
       		let observable = this._httpService.updateTask(_id, newTaskData)
       		observable.subscribe(data => {
       			console.log("Changing task to...", data)
       			this.getAllServiceTasks()
       		})
       	}

       
}//Close appComponent

