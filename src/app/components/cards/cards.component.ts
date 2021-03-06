import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
movies=[];
actualMovies=[];
kidsMovies=[];
loading=true;

@Input() buscar:boolean;
@Input() actual:boolean;
@Input() popular:boolean;
  constructor(private movieService: MovieService) { 
  this.loading=true;

    this.movieService.getPopulares().subscribe(data=>{
      this.movies=data.results
      
      this.loading=false;

      
    })

    this.movieService.getActual().subscribe(data=>{
      this.actualMovies=data.results
      this.loading=false;
      
    })

    this.movieService.getKids().subscribe(data=>{
      this.kidsMovies=data.results
      
    })


    console.log("niños");
    console.log(this.kidsMovies);
    
  
  }


  

  ngOnInit() {
  }

}
