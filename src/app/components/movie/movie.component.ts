import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieService } from 'src/app/services/movie.service';
import {Location} from '@angular/common'; 

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  movie:object={}
  index;
  loading=true;
  title:string
  constructor(private route:ActivatedRoute, private movieService: MovieService, private location:Location, private router:Router) {
    this.loading=true;
    this.route.params.subscribe(params=>{
     this.loading=true;
      this.movie=this.movieService.getMovie(params['id'],params['index']);
      console.log(params['id'], params['index']);
      this.index=params['index']
      console.log("Este",this.index);
      
  
      console.log(typeof(this.movie));
      console.log("aaa",this.movie);
      
      
      
    })
    this.loading=false;

   }

  ngOnInit() {
  }


}
