import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  mov=[]
  movies=[]
  actualMovies=[]
  kidsMovies=[]
  display={
      names:["Popular Movies", "Actual Movies", "Kids Movies"],
      variables:["popular", "actual", "kids"],
      messages:["Check out the most popular movies at this moment","See which movies you can go and see right now in the cinema",
                "This page it´s compromised with the humanity, so there´s a section for the kids too!"],
      services:[]          
    }
  
    constructor(private movieService: MovieService, private router: Router) { 
      
     this.movieService.getPopulares().subscribe(data=>{
      this.display.services.push(this.movies=data.results)
        
      })
     
      
  
      this.movieService.getActual().subscribe(data=>{
        this.display.services.push(this.actualMovies=data.results)
        
      })
  
      this.movieService.getKids().subscribe(data=>{
        this.display.services.push(this.kidsMovies=data.results)
        
      })
      console.log(this.display);
  
}

ruta(i){
  this.router.navigate([`/${this.display.variables[i]}`])

}
}
