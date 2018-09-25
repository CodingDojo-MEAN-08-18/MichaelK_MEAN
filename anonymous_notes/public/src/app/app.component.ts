import { Component, OnInit } from '@angular/core';
import { HttpService } from '././http.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	note: any;
	


	constructor(private _http: HttpService) { }

	 ngOnInit() {
	 	this.note = {content: ""}

 	 }


 	createNote(note){
 		let observable = this._http.createNoteService(this.note)
 		observable.subscribe(data =>{
 			console.log("Here is the note..", data)
 		})
 	}

	
	}

}//End of exports
