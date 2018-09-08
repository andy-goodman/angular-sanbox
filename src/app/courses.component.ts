import {Component} from '@angular/core';
import {CoursesService} from './courses.service';
import {EmailService} from './email.service';

@Component({
  selector: 'app-courses', // <courses> -> "courses", <div class="courses"> -> ".courses", <div id="courses"> -> "#courses"
  template: `

    <!-- String interponation -->
    <h2>{{ title }}</h2>
    <!-- Property binding -->
    <h2 [textContent]="title"></h2>
    
    <!-- String interponation -->
    <img src="{{ imageUrl }}" />
    <!-- Property binding -->
    <img [src]="imageUrl" />
    
    <ul>
      <li *ngFor="let c of courses">
        {{ c }}
      </li>
    </ul>
  `
})
export class CoursesComponent {
  title = 'List of courses';
  imageUrl = 'https://picsum.photos/400/200';
  courses;

  constructor(coursesService: CoursesService, emailService: EmailService) {
    this.courses = coursesService.getCourses();
    emailService.doSendEmail();
  }
}
