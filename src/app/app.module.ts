import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule, JsonpModule} from '@angular/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { CardsComponent } from './components/cards/cards.component';
import { ContentComponent } from './components/content/content.component';
import { RouterModule, ROUTES } from '@angular/router';
import {  app_routing } from './app-routing.module';
import { PopularComponent } from './components/popular/popular.component';
import { ActualComponent } from './components/actual/actual.component';
import { MovieComponent } from './components/movie/movie.component';
import { NoimagePipe } from './pipes/noimage.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    HomeComponent,
    SearchComponent,
    CardsComponent,
    ContentComponent,
    PopularComponent,
    ActualComponent,
    MovieComponent,
    NoimagePipe
  ],
  imports: [
    BrowserModule,
    HttpModule,
    JsonpModule,
    app_routing
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
