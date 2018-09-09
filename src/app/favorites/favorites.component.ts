import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css'],
  inputs: ['isFavorite']
})
export class FavoritesComponent implements OnInit {

  isFavorite: boolean;

  constructor() { }

  ngOnInit() {
  }

  onFavClick() {
    this.isFavorite = !this.isFavorite;
  }

}
