import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManageplayersComponent } from './manageplayers/manageplayers.component';
import { ListComponent } from './list/list.component';
import { AddplayerComponent } from './addplayer/addplayer.component';
import { ManageplayerstatusComponent } from './manageplayerstatus/manageplayerstatus.component';

const routes: Routes = [
	{path: 'managePlayers', component: ManageplayersComponent, children: [
			{path: 'listPlayers', component: ListComponent},
			{path: 'addPlayers', component: AddplayerComponent}]//End of children
		},//End of parent
	{path: 'managePlayerStatus', component: ManageplayerstatusComponent, children: [
			{path: 'game1', component: Game1Component},
			{path: 'game2', component: Game2Component},
			{path: 'game3', component: Game3Component}]
		}
];//End of routes

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
