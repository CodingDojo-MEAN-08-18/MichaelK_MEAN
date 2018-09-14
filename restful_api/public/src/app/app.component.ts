import { Component } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
       title = 'Restful Task/Angular';
       tasks: any;	//Sets type to any data type. 
       oneTask: any;
       //Here we can use classes from the http.Service.ts
       constructor(private _httpService: HttpService){

       }

       	//gets all tasks/home
       	getAllServiceTasks(){
       		let observable = this._httpService.getAllTasks()
       		//watches/subscribes for the data from the server.
       		//once return console log it and assign data to tasks to be shown in view.
       		observable.subscribe(data => {
       			console.log("Here are all the tasks", data)
       			this.tasks = data;
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
       	updateServiceTask(_id: string){
       		let observable = this._httpService.updateTask(_id)


       	}

       
}

