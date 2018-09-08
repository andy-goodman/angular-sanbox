import {Component} from '@angular/core';
import {CoursesService} from './courses.service';
import {EmailService} from './email.service';

@Component({
  selector: 'app-courses', // <courses> -> "courses", <div class="courses"> -> ".courses", <div id="courses"> -> "#courses"
  template: `

    <img src="{{ imageUrl }}" />
    <table>
      <tr>
        <td [attr.colspan]="colSpan"></td>
      </tr>
    </table>
  `
})
export class CoursesComponent {
  imageUrl = 'https://picsum.photos/400/200';
  colSpan = 2;
}
