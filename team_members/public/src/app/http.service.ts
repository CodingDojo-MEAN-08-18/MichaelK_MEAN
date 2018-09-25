import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  getPlayerService(){
  	return this._http.get('/api/players')
  }

  createPlayerService(player){
    console.log("Creating Author..")
    console.log(player)
  	return this._http.post('/api/new', player)
  }

  removePlayerService(id){
  	return this._http.delete('/api/remove/:id')
  }

}
