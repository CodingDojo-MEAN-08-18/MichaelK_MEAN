import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';
import { ActivatedRoute, RouterOutlet, Router } from '@angular/router';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {
	  notes: any;
	  list_notes = false;

  constructor(private _http: HttpService, 
  			  private _router: Router,
  	          private _route: ActivatedRoute) { }

  ngOnInit() {
  	this.getNotes()
  	this.notes = []
  }


  getNotes(){
		let observable = this._http.getNoteService()
		observable.subscribe(data =>{
			this.list_notes = true;
			console.log("Here are all the notes..", data)
			this.notes = data;
		})

}
