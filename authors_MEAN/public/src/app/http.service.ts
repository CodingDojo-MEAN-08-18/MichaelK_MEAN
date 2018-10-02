import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient){}

  getAuthorsService(){
  	return this._http.get('/api/authors')
  }

  createAuthorService(author){
    console.log("Creating Author..")
    console.log(author)
  	return this._http.post('/api/new', author)
  }

  editAuthorService(author){
  	return this._http.put('/api/update/'+author._id, author)
  }

  removeAuthorService(id){
  	return this._http.delete('/api/remove/'+id)
  }

  createQuoteService(quote){
  	return this._http.post('/api/new/quote', quote)
  }

  removeQuoteService(id){
  	return this._http.delete('/api/remove/quote/${id}')
  }
}//End of routes
