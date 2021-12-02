import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError, from } from 'rxjs';
import { catchError, delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  // allCheckoutsData: Checkout[];
  ChatData: any;


  constructor(public _http: HttpClient) { }



  getMovies(keyword: any) {
    return this._http.get(environment.apiURL + 'search/movie?api_key=ea13feb29808cba44ae41a961107c167&query=' + keyword)
  }

  getSeletedMovie(movie_id:any) {
    const headers = new HttpHeaders().set('Content-Type', 'text/plain');

    return this._http.get(environment.apiURL + 'movie/'+movie_id+'?api_key=ea13feb29808cba44ae41a961107c167')
  }


}
