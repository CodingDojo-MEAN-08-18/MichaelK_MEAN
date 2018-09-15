import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class HttpService {

  constructor(private _http: HttpClient) {
   }
  
  getAllTasks(){
    return this._http.get('/task')
  }
  getOneTask(_id){
    return this._http.get(`/task/${_id}`)
  }
  deleteTask(_id){
    return this._http.delete(`/task/${_id}`)
  }
  createTask(newTask){
    return this._http.post('/task', newTask)
  }
  updateTask(_id, newTaskData){
    return this._http.put(`/task/${_id}`, newTaskData)
  }
}


