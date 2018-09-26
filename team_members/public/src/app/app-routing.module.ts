import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ManageplayersComponent } from './manageplayers/manageplayers.component';
import { ListComponent } from './list/list.component';
import { AddplayerComponent } from './addplayer/addplayer.component';
import { ManageplayerstatusComponent } from './manageplayerstatus/manageplayerstatus.component';
import { Game1Component } from './game1/game1.component';

const routes: Routes = [
	{path: 'managePlayers', component: ManageplayersComponent, children: [
			{path: 'listPlayers', component: ListComponent},
			{path: 'addPlayer', component: AddplayerComponent}
			]//End of children
		},//End of parent
	{path: 'managePlayerStatus', component: ManageplayerstatusComponent, children: [
			{path: 'game/:gameNum', component: Game1Component}
			]//End of children
		}//End of parent			
];//End of routes

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
