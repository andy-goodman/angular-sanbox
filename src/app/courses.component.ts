import {Component} from '@angular/core';
import {CoursesService} from './courses.service';
import {EmailService} from './email.service';

@Component({
  selector: 'app-courses', // <courses> -> "courses", <div class="courses"> -> ".courses", <div id="courses"> -> "#courses"
  template: `

    <button class="btn btn-primary">OK</button>
    <button class="btn">Cancel</button>
  `
})
export class CoursesComponent {
  imageUrl = 'https://picsum.photos/400/200';
  colSpan = 2;
}
