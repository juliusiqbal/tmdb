import { Component, OnInit } from '@angular/core';

import { MovieService } from './movie.service';

@Component({
  selector: 'app-movie',
  styleUrls: ['./movie.component.scss'],
  templateUrl: './movie.component.html',
})
export class MovieComponent implements OnInit {
  public data: any[] = [];

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.movieService.getJSON().subscribe(data => {
      this.data = data;
    });
  }
}
