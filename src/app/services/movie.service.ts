import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IMovies } from '../models/i-movies';

@Injectable({
providedIn: 'root'
})

export class MovieService {

  private readonly URI_MOVIES = 'assets/list-movies.json';
  constructor( private http: HttpClient ) { }

  public findAll(): Observable<IMovies[]>{
    return this.http.get<IMovies[]>(this.URI_MOVIES);
  }
}
