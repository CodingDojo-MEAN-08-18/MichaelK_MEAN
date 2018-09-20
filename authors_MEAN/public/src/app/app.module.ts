import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Angular routing allows us to interchange which component will load on a certain part of our page
//ng new sample_app --routing CLI.
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AuthorsComponent } from './authors/authors.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { QuotesComponent } from './quotes/quotes.component';
import { AddQuoteComponent } from './add-quote/add-quote.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

//HttpClientmodule to makes requests.
//httpService to fetch data from database.
//Forms to use ngModel, etc.
import { HttpClientModule } from '@angular/common/http';
import { HttpService } from './http.service';
import { FormsModule } from '@angular/forms';


@NgModule({
  
  //Components
  declarations: [
    AppComponent,
    AuthorsComponent,
    CreateComponent,
    EditComponent,
    QuotesComponent,
    AddQuoteComponent,
    PageNotFoundComponent
  ],
  

  //Modules
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
