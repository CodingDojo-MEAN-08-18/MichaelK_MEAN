
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
    return this._http.post(`/new`, newTask)
  }
  updateTask(_id, newTaskData){
  	console.log("preparing to update")
    return this._http.put(`/update/${_id}`, newTaskData)
  }
}


