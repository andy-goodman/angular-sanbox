import { Component } from '@angular/core';
import {FavoriteChangedEventArgs} from './favorites/favorites.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  courses = [1];
}
