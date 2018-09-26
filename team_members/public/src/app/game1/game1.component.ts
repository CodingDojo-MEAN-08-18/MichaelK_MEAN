import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'
import { HttpService } from './../http.service';

@Component({
  selector: 'app-game1',
  templateUrl: './game1.component.html',
  styleUrls: ['./game1.component.css']
})
export class Game1Component implements OnInit {
	gameNum: any;
	players: any;

  constructor(private _http: HttpService, private _route: ActivatedRoute) {
  		//Takes the param that was passed with the routerLink and subscribes to it.
  		this._route.params.subscribe(params => {
  			console.log(params)
  			//Sets gameNum to the data that was passed and accessed the gameNum property.
  			this.gameNum = params.gameNum
  		})
   }

  ngOnInit() {
  	this.players = []
  	this.getPlayers()
  }

  getPlayers(){
  	let observable = this._http.getPlayerService()
  	observable.subscribe(data => {
  		console.log("Showing all players..", data)
  		this.players = data;
  	})
  }


  playing(_id: string, gameNum){
  	let game = "game" + gameNum
  }


}//End of exports

