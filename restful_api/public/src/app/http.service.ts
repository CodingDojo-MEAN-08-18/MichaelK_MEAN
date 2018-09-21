
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class HttpService {

  constructor(private _http: HttpClient) {
   }
  
  getAllTasks(){
  	//Returning the observables to be used int the app.component.
    return this._http.get(`/tasks`)
  }
  getOneTask(_id){
    return this._http.get(`/task/${_id}`)
  }
  deleteTask(_id){
    return this._http.delete(`/remove/${_id}`)
  }
  createTask(newTask){
  	//Sends an object to backend. Must be an object!
  	console.log("HTTP Request")
  	//Sends new task to be created.
    return this._http.post(`/new`, newTask)
  }
  updateTask(id, newTaskData){
  	console.log("preparing to update")
  	//Sends new object to be updated along with id. 
    return this._http.put(`/update/${newTaskData._id}`, newTaskData)
  }
}//End of export



