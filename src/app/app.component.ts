import { Component, OnInit } from '@angular/core';
import { MovieService } from './services/movie.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Movie-Search-Engine';
  moviesData: any;
  imageURL: string = "https://image.tmdb.org/t/p/w500"
  searchText: string = "ice"
  movieSelected: Boolean = false;
  movieSeletecByUser: any = {};

  constructor(
    public _MovieService: MovieService
  ) {

  }

  ngOnInit(): void {
    this.searchMovie()
  }

  searchMovie() {
    console.log(this.searchText)
    this._MovieService.getMovies(this.searchText).subscribe(
      data => {
        this.moviesData = data
        console.log(data);
      }, err => {
        console.log(err)
      }
    )
  }

  seletedMovie(movie: any) {
    this.movieSelected = true
    this.movieSeletecByUser = movie;
    console.log("Movie Object", movie)
    this._MovieService.getSeletedMovie(movie.id).subscribe(
      data => {
        console.log("Movie Data", data)
        this.movieSeletecByUser = data
      }
    )
  }
}
