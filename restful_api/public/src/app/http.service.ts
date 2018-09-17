import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class HttpService {

  constructor(private _http: HttpClient) {
   }
  
  getAllTasks(){
  	//Returning the observables to be used int the app.component.
    return this._http.get('/tasks')
  }
  getOneTask(_id){
    return this._http.get(`/task/${_id}`)
  }
  deleteTask(_id){
    return this._http.delete(`/remove/${_id}`)
  }
  createTask(newTask){
  	console.log("HTTP Request")
    return this._http.get(`/new`, newTask)
  }
  updateTask(_id, newTaskData){
    return this._http.put(`/update/${_id}`, newTaskData)
  }
}


