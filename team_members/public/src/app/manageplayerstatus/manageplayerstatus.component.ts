import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manageplayerstatus',
  templateUrl: './manageplayerstatus.component.html',
  styleUrls: ['./manageplayerstatus.component.css']
})
export class ManageplayerstatusComponent implements OnInit {

	gameNum: any;
	
  constructor() { }

  ngOnInit() {
  }

  game(num){
  	this.gameNum = num;
  }

}
