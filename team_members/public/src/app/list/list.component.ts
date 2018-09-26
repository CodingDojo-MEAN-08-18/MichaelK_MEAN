import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
	players: any;

  constructor(private _http: HttpService) { }

  ngOnInit() {
  	this.players = []
  	this.showAllPlayers()
  }

  showAllPlayers(){
  	let observable = this._http.getPlayerService()
  	observable.subscribe(data =>{
  		console.log("Showing all players..", data)
  		this.players = data;
  	})
  }

  deletePlayer(_id: string){
  	let observable = this._http.removePlayerService(_id)
  	observable.subscribe(data =>{
  		console.log("Deletion Successful..")
 		this.showAllPlayers()
  	})
  	}

}//End of exports
