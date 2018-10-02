import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Import all components
import { AppComponent } from './app.component';
import { AuthorsComponent } from './authors/authors.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { QuotesComponent } from './quotes/quotes.component';
import { AddQuoteComponent } from './add-quote/add-quote.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
	{path: 'authors', component:AuthorsComponent},
	{path: 'new/author', component:CreateComponent},
	{path: 'authors/edit/:id', component:EditComponent},
	{path: 'quotes', component:QuotesComponent},
	{path: 'new/quote', component:AddQuoteComponent},
	{path: '**', component:PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
