import {Component} from '@angular/core';
import {CoursesService} from './courses.service';

@Component({
  selector: 'app-courses', // <courses> -> "courses", <div class="courses"> -> ".courses", <div id="courses"> -> "#courses"
  template: `
    <h2>{{ title }}</h2>
    <ul>
      <li *ngFor="let c of courses">
        {{ c }}
      </li>
    </ul>
  `
})
export class CoursesComponent {
  title = 'List of courses';
  courses;

  constructor(service: CoursesService) {
    this.courses = service.getCourses();
  }
}
