import { Component, OnInit } from '@angular/core';

import { MovieService } from './movie.service';

@Component({
  selector: 'app-movie',
  styleUrls: ['./movie.component.scss'],
  templateUrl: './movie.component.html',
})
export class MovieComponent implements OnInit {
  public colHeaders: string[] = [
    'Budget',
    'Genres',
    'Homepage',
    'Id',
    'Keywords',
    'Original Language',
    'Original Title',
    'Overview',
    'Popularity',
    'Production Companies',
    'Production Countries',
    'Release Date',
    'Revenue',
    'Runtime',
    'Spoken Languages',
    'Status',
    'Tagline',
    'Title',
    'Vote Average',
    'Vote Count',
  ];

  public columns: object[] = [
    { data: 'budget' },
    { data: 'genres' },
    { data: 'homepage' },
    { data: 'id' },
    { data: 'keywords' },
    { data: 'original_language' },
    { data: 'original_title' },
    { data: 'overview' },
    { data: 'popularity' },
    { data: 'production_companies' },
    { data: 'production_countries' },
    { data: 'release_date' },
    { data: 'revenue' },
    { data: 'runtime' },
    { data: 'spoken_languages' },
    { data: 'status' },
    { data: 'tagline' },
    { data: 'title' },
    { data: 'vote_average' },
    { data: 'vote_count' },
  ];

  public data: object[] = [];

  public dataSchema: object = {
    budget: null,
    genres: null,
    homepage: null,
    id: null,
    keywords: null,
    original_language: null,
    original_title: null,
    overview: null,
    popularity: null,
    production_companies: null,
    production_countries: null,
    release_date: null,
    revenue: null,
    runtime: null,
    spoken_languages: null,
    status: null,
    tagline: null,
    title: null,
    vote_average: null,
    vote_count: null,
  };

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.movieService.getJSON().subscribe(data => {
      this.data = data;
    });
  }
}
