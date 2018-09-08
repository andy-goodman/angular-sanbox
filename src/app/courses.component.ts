import {Component} from '@angular/core';
@Component({
  selector: 'app-courses',
  template: `
    <input (keyup)="onKeyUp($event)" />
    <input (keyup.enter)="onEnterKey()" />
  `
})
export class CoursesComponent {

  onKeyUp($event) {
    if ($event.keyCode === 13) {
      console.log('Enter was pressed');
    }
  }

  onEnterKey() {
    console.log('Enter key pressed (onEnterKey detected)');
  }

}
