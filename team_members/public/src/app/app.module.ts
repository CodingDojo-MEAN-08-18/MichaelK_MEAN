import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ManageplayersComponent } from './manageplayers/manageplayers.component';

//HttpClientmodule to makes requests.
//httpService to fetch data from database.
//Forms to use ngModel, etc.
import { HttpClientModule } from '@angular/common/http';
import { HttpService } from './http.service';
import { FormsModule } from '@angular/forms';
import { ListComponent } from './list/list.component';
import { AddplayerComponent } from './addplayer/addplayer.component';
import { ManageplayerstatusComponent } from './manageplayerstatus/manageplayerstatus.component';
import { Game1Component } from './game1/game1.component';

@NgModule({
  declarations: [
    AppComponent,
    ManageplayersComponent,
    ListComponent,
    AddplayerComponent,
    ManageplayerstatusComponent,
    Game1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
