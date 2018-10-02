import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';
import { ActivatedRoute, RouterOutlet, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
	  author: any;
	  id: number;


  constructor(private _http: HttpService, 
  			  private _router: Router,
  	          private _route: ActivatedRoute) { 
  	//Activated route has an observable, 'params' that we can subscribe too, 
  	//in order to get the id passed via the /authors page when you click the edit button.
  	this._route.params.subscribe(params => {this.id = params.id});
  }


  ngOnInit() {
  	this.author = {name: "", _id: this.id}
  	
  }

  editAuthor(author){
    console.log(author)
  	let observable = this._http.editAuthorService(this.author)
    console.log(this.author)
  	observable.subscribe(data => {
  		console.log("In edit component")
  		console.log(data)
  		//Navigates back to authors homepage to see edited changes.
  		this._router.navigate(['/authors'])
  	})

  }

}
