import { Injectable } from '@angular/core';
import {Jsonp} from '@angular/http';
import {map} from 'rxjs/operators';
/* import SumarDias from '../extra' */
@Injectable({
  providedIn: 'root'
})

export class MovieService {
  
  array=[]

  private apikey:string='267de0bf2d90f503c35656c00a56bcd3';
  private urlMoviedb:string='https://api.themoviedb.org/3';
  constructor(private jsonp:Jsonp) { 
    this.array=[this.getPopulares(),this.getActual(), this.getKids()]
  }


  getPopulares(){
    let url=`${this.urlMoviedb}/discover/movie?sort_by=popularity.desc&api_key=${this.apikey}&language=en&callback=JSONP_CALLBACK`

    return this.jsonp.get(url)
                      .pipe(map(res=>res.json()))
  }

  getActual(){
    let url=`${this.urlMoviedb}/discover/movie?primary_release_date.gte=2019-10-24&primary_release_date.lte=2019-11-24&api_key=${this.apikey}&language=en&callback=JSONP_CALLBACK`;
    return this.jsonp.get(url)
    .pipe(map(res=>res.json()))
  }

  getKids(){

    let url=`${this.urlMoviedb}/discover/movie?certification_country=US&certification.lte=PG&sort_by=popularity.desc&api_key=${this.apikey}&language=en&callback=JSONP_CALLBACK`
    return this.jsonp.get(url)
    .pipe(map(res=>res.json()))
  }

  search(termino:string,i){
    let movieArr=[];
    let movieArr2=[];
    termino=termino.toLowerCase();
    this.array[i].subscribe(data=>{
     movieArr2=data.results
       for(let movie of movieArr2){
         let title= movie.title.toLowerCase();
         if(title.indexOf(termino)>=0){
           movieArr.push(movie);
         }
       }
    })

    return movieArr

  

  }
/* 

  searchActual(termino:string){
    let movieArr=[];
    let movieArr2=[];
    termino=termino.toLowerCase();
    this.getActual().subscribe(data=>{
     movieArr2=data.results
       for(let movie of movieArr2){
         let title= movie.title.toLowerCase();
         if(title.indexOf(termino)>=0){
           movieArr.push(movie);
         }
       }
    })

    return movieArr
  }
 */

  /* ${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()} */
  //http://image.tmdb.org/t/p/w300/v0eQLbzT6sWelfApuYsEkYpzufl.jpg imagen
}
