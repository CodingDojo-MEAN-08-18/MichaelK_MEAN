import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class HttpService {
    constructor(private _http: HttpClient){
    	//Invoked in constructor so it'll be the first thing the app does. 
    	this.getPokemon();
    }

    getPokemon(){
		//bulbasaur = observable
	    let bulbasaur = this._http.get('https://pokeapi.co/api/v2/pokemon/1/');
	    bulbasaur.subscribe(data => {
	    	console.log("Here is your pokemon!", data)
	    	var first_move = data.moves[0].move.name;
	      	var second_move = data.moves[1].move.name;
	      	console.log(`Bulbasaur's moves are ${first_move} and ${second_move}`);
	    });
	    let share_move = this._http.get("https://pokeapi.co/api/v2/move/13/")
	    share_move.subscribe(move_data => {
	    	console.log(move_data);
	    	console.log(move_data.names, 'Share the same moves as Bulbasaur.')
	    })


	}
}


