import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {
	//Assign types here
	authors: any;

  constructor(private _http: HttpService) { }

  ngOnInit() {
  	//Anything here implements on page entry.
  	this.authors = [];
  	this.getAllAuthors()

  }

  getAllAuthors(){
  		let observable = this._http.getAuthorsService()
  		observable.subscribe(data =>{
  			this.authors = data;
  		})
  	}

  removeOneAuthor(id){
  	let observable = this._http.removeAuthorService(id)
  	observable.subscribe(data =>{
  		//Once we get data back show all the authors. 
  		this.getAllAuthors()
  	})
  }

}
