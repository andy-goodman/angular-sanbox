import {Component} from '@angular/core';
@Component({
  selector: 'app-courses',
  template: `
    {{ text | summary:10 }}
    
    <h2>Course info (built-in pipes used)</h2>
    <p>{{ course.title | uppercase | lowercase}}</p>
    <p>{{ course.students | number }}</p>
    <p>{{ course.rating | number:'2.1-1'}}</p>
    <p>{{ course.price | currency:'AUD':true:'3.2-2' }}</p>
    <p>{{ course.releaseDate | date:'dd.mm.yyyy' }}</p>
  `
})
export class CoursesComponent {

  text = `
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  `;

  course = {
    title: 'The one',
    rating: 4.953,
    students: 30234,
    price: 190.99,
    releaseDate: new Date(2018, 9, 1)
  };

}
