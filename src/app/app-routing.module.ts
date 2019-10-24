import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { PopularComponent } from './components/popular/popular.component';
import { ActualComponent } from './components/actual/actual.component';


const app_routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'search/:termino', component: SearchComponent},
  { path: 'popular', component: PopularComponent},
  { path: 'actual', component: ActualComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];
export const app_routing = RouterModule.forRoot(app_routes);
