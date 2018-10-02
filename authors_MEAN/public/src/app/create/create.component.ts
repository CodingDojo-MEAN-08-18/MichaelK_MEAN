import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';
import { ActivatedRoute, RouterOutlet, Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
	author: any;

  constructor(private _http: HttpService,
              private _router: Router,
              private _route: ActivatedRoute) { }

  ngOnInit() {
  	this.author = {name: ""}
  }

  createAuthor(author){
  	console.log("In Create component")
  	let observable = this._http.createAuthorService(this.author)
  	observable.subscribe(data =>{
  		console.log("New Author added..", data)
      this._router.navigate(['/authors'])

  	})
  }

}
