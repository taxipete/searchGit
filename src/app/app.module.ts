import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { JsonpModule } from '@angular/http';

import './rxjs-extensions';

import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { WikipediaService } from './wikipedia.service';
import { GithubSearchService } from './github-search.service';
import { AppRoutingModule, routableComponents } from './app-routing.module';
import { SearchListComponent } from './search-list/search-list.component';
import { TickboxComponent } from './tickbox/tickbox.component';


@NgModule({
  declarations: [
    AppComponent,
    routableComponents,
    SearchListComponent,
    TickboxComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    AppRoutingModule
  ],
  providers: [WikipediaService, GithubSearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
