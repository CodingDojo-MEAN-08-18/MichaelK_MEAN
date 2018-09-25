import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

    getNoteService(){
  	console.log("In service..")
  	return this._http.get('/api/notes')
  }

  createNoteService(note){
    console.log("Creating Note..")
    console.log(note)
  	return this._http.post('/api/new', note)
  }



}
