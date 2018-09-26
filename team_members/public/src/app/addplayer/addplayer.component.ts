import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';

@Component({
  selector: 'app-addplayer',
  templateUrl: './addplayer.component.html',
  styleUrls: ['./addplayer.component.css']
})
export class AddplayerComponent implements OnInit {
	player: any;

  constructor(private _http: HttpService) { }

  ngOnInit() {
  	this.player = {name: "", position: ""}
  }


  addPlayer(player){
  	let observable = this._http.createPlayerService(this.player)
  	observable.subscribe(data =>{
  		console.log("Player added!", data)

  	})
  }

}
