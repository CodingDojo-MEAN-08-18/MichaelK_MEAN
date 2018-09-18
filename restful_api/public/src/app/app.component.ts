import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
       title = 'Restful Task/Angular';
       tasks = [];	//Sets type to an array. 
       oneTask: any;//Sets type to any data type.
       newTask: any;;	//sets type to an object.
       task_clicked = false;
       edit_task_toggle = false;
       editTask: any;

       //Here we can use classes from the http.Service.ts
       constructor(private _httpService: HttpService){

       }

       ngOnInit(){
       	//Gets invoked right away.
       		this.getAllServiceTasks()
       		this.newTask = {title:'', description:''} 
       		this.editTask = {title:'', description:'', _id:''}      	
       }

        createTask(newTask){
        	console.log("In component..")
        	console.log(this.newTask)
		    let taskObservable = this._httpService.createTask(this.newTask)
		    taskObservable.subscribe(data=>{
		      console.log("Creating a new task..", data)
		   })
		 }

       	//gets all tasks/home
       	getAllServiceTasks(){
       		let observable = this._httpService.getAllTasks()
       		//watches/subscribes for the data from the server.
       		//once return console log it and assign data to tasks to be shown in view.
       		observable.subscribe(data => {
       			console.log("Here are all the tasks", data)
       			// In this example, the array of tasks is assigned to the key 'data' in the data object via JSON on the console. 
       			this.tasks = data['data'];
       		})
       	}
       	//takes an id parameter
       	getOneServiceTask(_id: string){
       		let observable = this._httpService.getOneTask(_id)
       		observable.subscribe(data => {
       			console.log("Here is the task", data)
       			this.task_clicked = true;
       			this.oneTask = data['data']
       		})
       	}
       	removeServiceTask(_id: string){
       		let observable = this._httpService.deleteTask(_id)
       		observable.subscribe(data => {
       			console.log("Deleting this task..", data)
       			//Passes data to backend and gets deleted.
       		})
       		
       	}
       	populateUpdateFields(task){
       		console.log("populating fields", task)
       		this.editTask.id = this.task._id
       		this.editTask.title = this.task.title
       		this.editTask.description = this.task.description
       	}
       	updateServiceTask(editTask){
       		let observable = this._httpService.updateTask(_id, this.editTask)
       		observable.subscribe(data => {
       			console.log("Changing task to...", data)
       			this.edit_task_toggle = true;
       			this.newTaskData.title = data['data'].title;
       			this.newTaskData.description = data['data'].description;
       		})
       	}

       
}//Close appComponent

