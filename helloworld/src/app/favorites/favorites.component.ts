import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {

  @Input()
  isFavorite: boolean;

  @Output()
  change = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onFavClick() {
    this.isFavorite = !this.isFavorite;
    console.log('Favorite clicked, emitting an event', this.isFavorite);
    this.change.emit({
      newValue: this.isFavorite
    });
  }

}

export interface FavoriteChangedEventArgs {
  newValue: boolean;
}

