import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  artistas:any[]=[];
  buscar=true;
  termino:string;
  movies=[];
  actualMovies=[];;
  kidsMovies=[];
  mov=[]
  names=["Popular Movies","Actual movies", "Kids movies"]

  constructor(private activatedRoute:ActivatedRoute, private movieService:MovieService, private router: Router) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params=>{
      console.log(params['termino']);
      this.termino=params['termino'];
      this.movies=this.movieService.search(this.termino,0);
      this.actualMovies=this.movieService.search(this.termino,1);
      this.kidsMovies=this.movieService.search(this.termino,2);
      this.mov=[this.movies,this.actualMovies,this.kidsMovies]
      console.log("hollaaa");
      
      console.log(this.movies);
      

      
    })
  }

  search(termino:string){
  
  
    this.router.navigate(['/search', termino])
    
     
   }

}
