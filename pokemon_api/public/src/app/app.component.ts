import { Component } from '@angular/core';
//Injecting our service into 
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
   title = 'Pokemon API';
   constructor(private _httpService: HttpService){
    }

    Mike = {
    	height: 62,
    	weight: 220,
    	
    }
 }
