import { Component, OnInit } from "@angular/core";
import { MovieService } from "../../services/movie.service";
import { IMovies } from "../../models/i-movies";

@Component({
  selector: "app-movie-table",
  templateUrl: "./movie-table.component.html",
  styleUrls: ["./movie-table.component.scss"]
})

export class MovieTableComponent implements OnInit {

  movies: IMovies[] = [];

  constructor(private service: MovieService) { }

  ngOnInit(): void {
    this.service.findAll().subscribe({
      next: (data) => this.movies = data,
      error: (error) => console.log("Error: ", error)
    });

    //apenas para debug:
    for (let b of this.movies) {
      console.log(b.id);
      console.log(b.title);
      console.log(b.category);
      console.log(b.duration);
    }
  }
}
