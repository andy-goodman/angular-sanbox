import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {

  @Input()
  isFavorite: boolean;

  constructor() { }

  ngOnInit() {
  }

  onFavClick() {
    this.isFavorite = !this.isFavorite;
  }

}
