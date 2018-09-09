import { Component } from '@angular/core';
import {FavoriteChangedEventArgs} from './favorites/favorites.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  courses = [];

  onAdd() {
    this.courses.push({ id: 4, name: 'Course 4'});
  }

  onChange(course) {
    course.name = 'UPDATED';
  }

  onRemove(course) {
    let index = this.courses.indexOf(course);
    this.courses.splice(index, 1);
  }

  loadCourses() {
    this.courses = [
      {id: 1, name: 'Course1'},
      {id: 2, name: 'Course2'},
      {id: 3, name: 'Course3'}
    ];
  }

  trackCourse(index, course) {
    course ? course.id : undefined;
  }
}
