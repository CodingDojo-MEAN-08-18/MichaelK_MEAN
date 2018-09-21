import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
	author: any;

  constructor(private _http: HttpService) { }

  ngOnInit() {
  	this.author = {name: ""}
  }

  createAuthor(author){
  	console.log("In Create component")
  	let observable = this._http.createAuthorService(this.author)
  	observable.subscribe(data =>{
  		console.log("New Author added..", data)
  	})
  }

}
