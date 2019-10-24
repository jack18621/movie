import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  
 termino:string;
  
  constructor(private movieSearch:MovieService, private router:Router) {
    
    
  
   }

  ngOnInit() {
  }

  search(termino:string){
  
  
   this.router.navigate(['/search', termino])
   
    
  }

 
  

 

}
