import {Component} from '@angular/core';
@Component({
  selector: 'app-courses',
  template: `
    <input (keyup.enter)="onEnterKey($event)" />
    <input #email (keyup.enter)="onEnterEmail(email.value)" />
  `
})
export class CoursesComponent {

  onEnterKey($event) {
    console.log($event.target.value);
  }

  onEnterEmail(email) {
    console.log(email);
  }

}
