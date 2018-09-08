import {Component} from '@angular/core';
@Component({
  selector: 'app-courses',
  template: `
    <div (click)="onDivClicked()">
      <button class="btn btn-primary" (click)="onSave($event)">Save</button>
    </div>
  `
})
export class CoursesComponent {

  private onSave($event) {
    $event.stopPropagation();
    console.log('Saving ... ', $event);
  }

  private onDivClicked() {
    console.log('Div was clicked');
  }

}
